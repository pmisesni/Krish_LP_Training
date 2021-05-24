
public class CreditCardFactory {
	
	public CreditCard card;
	
	public CreditCard getProduct(String cardType) {
		
		if(cardType == null)
			return null;
		else if(cardType.equalsIgnoreCase("Platinum plus")) {
			card = new Platinum(); 
		}else if(cardType.equalsIgnoreCase("Titanium edge")) {
			card = new Titanium(); 
		}else if(cardType.equalsIgnoreCase("Moneyback")) {
			card = new MoneyBack(); 
		}
		return card;
		
	}
	
	

}
