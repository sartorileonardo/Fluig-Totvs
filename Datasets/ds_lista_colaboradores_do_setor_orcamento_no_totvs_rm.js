
function createDataset(fields, constraints, sortFields) {
	//Abaixo é configurada a conexão JDBC de teste do RM e um SQL para a tabela PPESSOA
	var fieldArray = new Array("/jdbc/RM_TESTE02", 
			"SELECT UPPER(PPESSOA.NOME) AS NOME FROM PPESSOA(NOLOCK) "+
			"INNER JOIN PFUNC(NOLOCK) ON PFUNC.CODPESSOA = PPESSOA.CODIGO "+
			"WHERE PFUNC.CODSECAO = '01.001.005.002.001.001' "+
			"ORDER BY PPESSOA.NOME ASC");
	//var fieldArray = new Array("/jdbc/FluigDSRO", "select * FROM FDN_USERDATA  WHERE DATA_KEY = 'empresa_erp'");
	//var fieldArray = new Array("/jdbc/FluigDSRO", "UPDATE FDN_USERDATA SET DATA_VALUE = '66' WHERE DATA_KEY = 'empresa_erp'");
	
	var dsTranslator = DatasetFactory.getDataset("db_generic_sqldataset", fieldArray, null, null);
	return dsTranslator;
}