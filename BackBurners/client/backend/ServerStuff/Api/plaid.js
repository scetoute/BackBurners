const axios = require('axios');
const router = require('express').Router();
const plaid = require('plaid');
const { DaBank, Account, Trans, Budget } = require('../Database/Objects')

//console.log(JSON.stringify(process.env))

const plaidClient = new plaid.Client(
  "5e768da7e188cf00137a1138",
  'EarMarktoDaMoon',
  "ae0d789b854b418325ba1e8994c2f7",
  plaid.environments.sandbox
);

router.post('/plaidExchange', async (req, res, next) => {
  let ACCESS_TOKEN = null;
  let daBankId = null;
  const user = req.body;

  try {
    /*-----------get public token fron frontend------------------*/
    let publicToken = req.body.public_token;

    /*--------exchange public token for accesstoken and itemID-----------*/
    plaidClient.exchangePublicToken(publicToken, async (error, tokenResponse) => {
      if (error !== null) {
        var msg = 'Could not exchange public_token!';
        console.log(msg + '\n' + error);
      } else {
        console.log(tokenResponse)
        //ACCESS_TOKEN = tokenResponse.access_token;
        //daBankId = tokenResponse.item_id;
        const newDaBank = await DaBank.create({
          accessToken: ACCESS_TOKEN,
          bank: daBankId,
          userId: user._id
        })

        /* Use Date.now() to get past 3 months info*/

        await plaidClient.getTransactions(ACCESS_TOKEN, startDate, endDate, async (error, resp) => {
          if(error !== null) {
            if(plaid.PlaidError(error)) {
              console.log("Plaid Error: " + error)
            } else {
              console.log("Non-Plaid Error: " + error)
            }
          } else {
            resp.accounts.map(async (account) => {
              console.log(account)
              //await Account.create({

              //})
            })

            resp.transactions.map(async (transaction) => {
              console.log(transaction)
              //await Trans.create({

              //})
            })
          }
        })


        const accounts = await Account.findAll({where: {userId: user._id}});
        const transactions = await Trans.findAll({where: {userId: user._id}});
        const budget = await Budget.findAll({where: {userId: user._id}});
        resp.json({
          acc:accounts,
          trans: transactions,
          budg: budget
        })
      }
    });
  } catch (err) {
    // Indicates plaid API error
    console.log('Exchange token returned an error', {
      error_type: err.error_type,
      error_code: res.statusCode,
      error_message: err.error_message,
      display_message: err.display_message,
      request_id: err.request_id,
      status_code: err.status_code
    });
    next(err);
  }
});

router.put('/', async (req, resp, next) => {
  const user = req.body;
  const daBank = await DaBank.findOne({where:{userId: user._id}});
  const ACCESS_TOKEN = daBank.accessToken;
  /* create start and end date from date.now()*/

  try {
    await plaidClient.getTransactions(ACCESS_TOKEN, startDate, endDate, async (error, resp) => {
      if(error !== null) {
        if(plaid.PlaidError(error)) {
          console.log("Plaid Error: " + error)
        } else {
          console.log("Non-Plaid Error: " + error)
        }
      } else {
        resp.accounts.map(async (account) => {
          console.log(account)
          //await Account.create({

          //})
        })

        resp.transactions.map(async (transaction) => {
          console.log(transaction)
          //await Trans.create({

          //})
        })
      }
    })

    const accounts = await Account.findAll({where: {userId: user._id}});
    const transactions = await Trans.findAll({where: {userId: user._id}});
    resp.json({
      acc:accounts,
      trans: transactions,
    })
  } catch(err) {
    next(err)
  }

})

module.exports = router;