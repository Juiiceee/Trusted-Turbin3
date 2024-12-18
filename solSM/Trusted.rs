use anchor_lang::prelude::*;

// This is your program's public key and it will update
// automatically when you build the project.
declare_id!("DXppEpxafMhu7Hbaj1JnufAcsVoZT8rPEb4pnfyo1ZqY");

#[program]
mod hello_anchor {
    use super::*;
    pub fn initializecompagny(ctx: Context<InitializeCompagny>, name: String, siren: u64, amount: u64, address: Pubkey) -> Result<()> {
        if (name.len() as usize > 29)
        {
            return (err!(MyError::StringIsTooBig));
        }
        ctx.accounts.compagny.compagny_name = name;
        ctx.accounts.compagny.compagny_siren = siren;
        ctx.accounts.compagny.requestamount = amount;
        ctx.accounts.compagny.compagnyaddress = address;
        Ok(())
    }

    pub fn initializecompagny(ctx: Context<InitializeCompagny>, name: String, siren: u64, amount: u64, address: Pubkey) -> Result<()> {
        if (name.len() as usize > 29)
        {
            return (err!(MyError::StringIsTooBig));
        }
        ctx.accounts.compagny.compagny_name = name;
        ctx.accounts.compagny.compagny_siren = siren;
        ctx.accounts.compagny.requestamount = amount;
        ctx.accounts.compagny.compagnyaddress = address;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct InitializeCompagny<'info> {
    #[account(init, payer = signer, space = 8 + (4 + 30) + 8 + 8 + 32)]
    pub compagny: Account<'info, Compagny>,
    #[account(mut)]
    pub signer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct Compagny {
    compagny_name: String,
    compagny_siren: u64,
    requestamount: u64,
    compagnyaddress: Pubkey,
}

#[error_code]
pub enum MyError {
    #[msg("The string is too big")]
    StringIsTooBig,
}