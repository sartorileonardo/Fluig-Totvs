function createDataset(fields, constraints, sortFields) {
	try{
		 var contextWD = new javax.naming.InitialContext();
		 var dataSourceWD = contextWD.lookup("java:/jdbc/RM_TESTE_DB");
		 var connectionWD = dataSourceWD.getConnection();
	 } catch (e){
		 log.info("Erro conexao RM - " + e);
	 } 
	 	 
	 var newDataset = DatasetBuilder.newDataset();
	 
	 newDataset.addColumn("CODCFO");
	 newDataset.addColumn("NOMEFANTASIA");
	 
	 
	 var SQL = "SELECT CODCFO, NOMEFANTASIA FROM FCFO(NOLOCK)";	     	 
	  	 
	 var statementWD = connectionWD.prepareStatement(SQL);
	 var rsWD = statementWD.executeQuery();
	 
	 while(rsWD.next()){
		 newDataset.addRow(
			 new Array(					 
			    rsWD.getString("CODCFO"),
			    rsWD.getString("NOMEFANTASIA")
			    
			 )
		 );
	 }
	 
	 rsWD.close();
	 statementWD.close();
	 connectionWD.close();
	 
	 return newDataset;
	
}