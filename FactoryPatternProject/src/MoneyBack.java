
public class MoneyBack implements CreditCard{

	@Override
	public String getCardType() {
		
		return "MoneyBack";
	}

	@Override
	public int getCreditLimit() {
		
		return 15000;
	}

	@Override
	public int getAnnualCharge() {
		
		return 500;
	}
	
	
	public String toString() {
		return "This is " + getCardType()
			+ "\ncredit limit is "+  getCreditLimit()
			+ "\nannual charge is " + getAnnualCharge();
		
	}

}
