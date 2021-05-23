
public class SingletonDemo {

	public static void main(String[] args) {
		ConfigurationManager configManager = ConfigurationManager.getConfigManager(); 
		System.out.println(configManager);
		
		ConfigurationManager configManager1 = ConfigurationManager.getConfigManager(); 
		System.out.println(configManager1);

	}

}
