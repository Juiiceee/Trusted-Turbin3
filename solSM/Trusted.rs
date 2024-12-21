use anchor_lang::prelude::*;

// This is your program's public key and it will update
// automatically when you build the project.
declare_id!("FTgodz6oRFyXhhMVg7PAmknZEjA7pCrQCDnWTwV1XTrk");

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

	pub fn initializerequestdonation(
		ctx: Context<InitializeRequestDonation>,
		project_name: String,
		project_description: String,
		project_quote: String,
		project_image: String,
		project_amount: u64,
		limite_date: u64,
		longitude: String,
		latitude: String,
	) -> Result<()> {
		let request_donation = &mut ctx.accounts.request_donation;
	
		let clock = Clock::get()?;
		let current_timestamp = clock.unix_timestamp as u64;
		request_donation.project_name = project_name;
		request_donation.project_description = project_description;
		request_donation.project_quote = project_quote;
		request_donation.project_image = project_image;
		request_donation.project_amount = project_amount;
		request_donation.creation_date = current_timestamp;
		request_donation.limite_date = limite_date;
		request_donation.location = Location { longitude, latitude };
		request_donation.status = Status::Ongoing;
	
		Ok(())
	}

    pub fn changestate(ctx: Context<ChangeState>, state: Status) -> Result<()> {
    ctx.accounts.request_donation.status = state;
    Ok(())
}
}

#[derive(Accounts)]
pub struct InitializeCompagny<'info> {
    #[account(init,
    payer = signer,
    space = 8 + (4 + 30) + 8 + 8 + 32)]
    pub compagny: Account<'info, Compagny>,
    #[account(mut)]
    pub signer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct InitializeRequestDonation<'info> {
		#[account(init, payer = user, space = 8 + (4 + 50) + (4 + 50) + (4 + 50) + (4 + 50) + 8 + 8 + 8 + ((4 + 20) + (4 + 20)) + (1 + 0))]
		pub request_donation: Account<'info, RequestDonation>,
		#[account(mut)]
		pub user: Signer<'info>,
		pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct ChangeState<'info> {
		#[account(mut)]
		pub request_donation: Account<'info, RequestDonation>,
		pub user: Signer<'info>,
		pub system_program: Program<'info, System>,
}

#[account]
pub struct Compagny {
    compagny_name: String,
    compagny_siren: u64,
    requestamount: u64,
    compagnyaddress: Pubkey,
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone)]
pub struct Location {
    longitude: String,
    latitude: String,
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone)]
pub enum Status {
    Cancelled,
    Ongoing,
    Completed,
}

#[account]
pub struct RequestDonation {
    project_name: String,
    project_description: String,
    project_quote: String,
    project_image: String,
    project_amount: u64,
    creation_date: u64,
    limite_date: u64,
    location: Location,
    status: Status,
}

#[error_code]
pub enum MyError {
    #[msg("The string is too big")]
    StringIsTooBig,
}