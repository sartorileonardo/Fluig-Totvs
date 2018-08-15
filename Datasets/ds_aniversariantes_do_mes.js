function createDataset(fields, constraints, sortFields) {

	//Abaixo é configurada a conexão JDBC de teste do RM e um SQL para a tabela PPESSOA
	var fieldArray = new Array("/jdbc/ERP_RM_TESTE_DB", 
			"SELECT " +
			"PFUNC.NOME AS 'Colaborador'," +
			"REPLACE(FORMAT(PPESSOA.DTNASCIMENTO, 'dd/MM/yyyy', 'en-US' ), '00:00:00', '') AS 'Data Nascimento'," +
			"DAY(PPESSOA.DTNASCIMENTO) AS 'Dia'," +
			"MONTH(PPESSOA.DTNASCIMENTO) AS 'Mês' " +
			"FROM PFUNC(NOLOCK) " +
			"INNER JOIN PPESSOA ON PFUNC.CODPESSOA = PPESSOA.CODIGO " +
			"WHERE PFUNC.CODCOLIGADA = 1 " +
			"AND PFUNC.CODSITUACAO = 'A' " +
			"AND MONTH(GETDATE()) = MONTH(PPESSOA.DTNASCIMENTO) " +
			"ORDER BY DAY(PPESSOA.DTNASCIMENTO) ASC");
		
	var dsTranslator = DatasetFactory.getDataset("db_generic_sqldataset", fieldArray, null, null);
	return dsTranslator;
}