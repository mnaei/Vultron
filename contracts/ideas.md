
// function adds new maker pools
// function withdraw collateral from one maker pool, deposit into aave, borrow collateral 2 and deposit in maker vault
// function to withdraw collateral
// function to deposit collateral
// function to borrow debt
// function to payback debt
// what happens if user withdraws collateral and it causes a margin call
// what happens if user withdraws collateral and it is locked up in aave
// put withdrawal limits 
// triggers:
// maybe forget margin sharing and focus on itravault balancing
// how is automated balancing calculated? should we find a threshold that we set?
// let the user deposit all kinds of 
// sure sure the margin buffer between all vault is the same
// margin buffer should be calculated relative to the risk of every asset
// 140% vs 120% should have diffrent buffer percentages
// we can set weighted indexces. 140% would be 4, 120% would be 2
// 140% should have a buffer of 20% when 120% has a buffer of 10%
// do it only for btc and eth for now, there might not be enough demand for other tokens right now
// since ETH and BTC have the same margin, make sure they have the same margin buffer
// this way margin sharing might be more vauble
// do margin sharing with a vault of 150%, but users pay more fee for more safety
// then do margin balancing between btc and eth
// then bring on other people to the project to enhance it.
// the hardest thing for me always consedering the variable. You should be less affraid of that. 
// Question:
    // how do I get intrest rates from maker
    // how do I get intrest rates from aave
    // how do I charge intrest rate correctly? 
    // or atleast know how much intrest has been accured so I can charge it from each user
// You really have to replicate every functionality 
// I think you are running out of boredom, so the depression is hitting you hard.
// just do the eth/btc balancing and margin sharing
// We have to be considerate of the underlying functions. Whether the vaults are paused, not paused, etc.. and build workaround
// I think building the individual vaults is better because then we don't have to worry about fee sharing
    // or when to do margin calls
// We could charge a very tiny amount 0.2% yearly 
// Gain a good understanding of the underlying protocols 
// leverage the knowledge of the yieldster team
// see if the yieldster team will work with aave or maker dao
// we also have to calculate the fee of the lending protocol
// the bad part is without the pooling, then every vault would
    // have to be seprately rebalanced 
// remember you would be depositing ETH / BTC and withdrawing BTC/ETH so the intrest rates would cancel out
// if the intrest is just taken out of the balance everytime a call is made that would be perfect
    // it would do the job of calculating fees for us
// The DAI from this fee is minted, added to the DAI debt for the vault
// https://makerdao.world/en/learn/governance/param-stability-fee/ 
// https://github.com/makerdao/developerguides
// We have to calculate the margin amoutn between borrowing BTC and ETH
// loan to value seems to be everything against everything
// on our vault we have to do margin call considering the users both ETC and BTC vault
// margin sharing makes sense in this case, because a user could be delinquite in 
    // one vault but be over collatrezlied in another vault
// https://github.com/makerdao/awesome-makerdao
// When we collectivize margin, we are less likely to have to do vault rebalancing
// To add our fees, we can use the same system maker dao is using, which is to increase the debt, 
    // and then subtract their debt to our own and thats how we get our fees. 
    // We would still have to call the drip function every once a while to collect the fees
// We would have to integrate with one inch to liquidate our position. 
// before you innovate on the margin call, make sure it is valuble enough to add that feature
// Our focus should be on margin sharing and multi asset vaults
// You really have to be aware of the decimal point
// Check how many decimal points does the oracle price have?
// I think margin sharing is done automatially 
// we have to be carefull not too much is minted from one pool. When minting withdraw from the deeper poo
    // and if they are both equale split between them 
// Rather than change the collateral, you can move the debt amount between the vaults directly
// Consider debt celiing
// what happens if they are under water with one of their vaults and they want to withdraw the total value of that vault?
    // are we always going to keep both vault above 150% debt to asset by periodically changing it? and should we disallow 
    // this action? In the meanwhile if the total user vault is going to go below the the 150% for the total vault
    // line then disallow the withdrawal. Or we can calculate and move debt in the transaction itself
// see how the vault manages debt to asset ratio? is it on the front end or backed? 
// We have to think about what happens when we do recive a margin call
// https://github.com/makerdao/developerguides/blob/master/devtools/working-with-dsproxy/working-with-dsproxy.md
// https://ethereum.stackexchange.com/questions/90303/what-is-dsproxy-and-how-does-it-work
// in later ittrations have a pool of money that reduces gas cost for minting USDY
// On every deposit and withdrawal, after it is finish ensure the user calles the fee charger and the debt balancer
// update collateral fee rate on borrow and payback of dai
// instead of an auction system just integrate with one inch to liquidate position.
// provide a grace percentage, unless the system is close to its own margin call.
// for your deployment you need to take some of your eth and convert it to wbtc