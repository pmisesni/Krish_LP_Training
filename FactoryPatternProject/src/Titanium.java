
public class Titanium implements CreditCard{

	@Override
	public String getCardType() {
		
		return "Titanium Edge";
	}

	@Override
	public int getCreditLimit() {
		
		return 25000;
	}

	@Override
	public int getAnnualCharge() {
		
		return 1500;
	}
	
	
	public String toString() {
		return "This is " + getCardType()
			+ "\ncredit limit is "+  getCreditLimit()
			+ "\nannual charge is " + getAnnualCharge();
		
	}

}
