
public class FactoryPatternDemo {

	public static void main(String[] args) {
		
		CreditCardFactory creditCardFactory = new CreditCardFactory();
		
		CreditCard empty = creditCardFactory.getProduct("");
		System.out.println(empty);
		
		CreditCard card1 = creditCardFactory.getProduct("Platinum plus");
		System.out.println(card1.toString());
		
		CreditCard card2 = creditCardFactory.getProduct("Titanium edge");
		System.out.println(card2.toString());
		
		CreditCard card3 = creditCardFactory.getProduct("Moneyback");
		System.out.println(card3.toString());
		
		
	}

}
