
public class Platinum implements CreditCard{

	@Override
	public String getCardType() {
	
		return "Platinum Plus";
	}

	@Override
	public int getCreditLimit() {
		
		return 35000;
	}

	@Override
	public int getAnnualCharge() {
		
		return 2000;
	}
	
	
	public String toString() {
		return "This is " + getCardType()
			+ "\ncredit limit is "+  getCreditLimit()
			+ "\nannual charge is " + getAnnualCharge();
		
	}

}
