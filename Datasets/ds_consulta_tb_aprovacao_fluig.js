
function createDataset(fields, constraints, sortFields) {
	//Abaixo é configurada a conexão JDBC de teste do RM e um SQL para a tabela PPESSOA
	var fieldArray = new Array("/jdbc/FluigDS", 
			"SELECT * FROM APROVACAO;");
	//var fieldArray = new Array("/jdbc/FluigDSRO", "select * FROM FDN_USERDATA  WHERE DATA_KEY = 'empresa_erp'");
	//var fieldArray = new Array("/jdbc/FluigDSRO", "UPDATE FDN_USERDATA SET DATA_VALUE = '66' WHERE DATA_KEY = 'empresa_erp'");
	
	var dsTranslator = DatasetFactory.getDataset("db_generic_sqldataset", fieldArray, null, null);
	return dsTranslator;
}