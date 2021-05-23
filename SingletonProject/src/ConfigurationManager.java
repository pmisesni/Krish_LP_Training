public class ConfigurationManager{
    private static volatile ConfigurationManager configManager;
   
    private ConfigurationManager(){
        if(configManager != null){
            throw new RuntimeException("Intance should be created by getConfigManager()");
        }
    }
   
    public static ConfigurationManager getConfigManager(){
       
    	//Double checking Singleton
        if(configManager == null){
            synchronized(ConfigurationManager.class){
                if(configManager == null){
                    configManager = new ConfigurationManager();
                }
            }
        }
        return configManager;
    }
}
