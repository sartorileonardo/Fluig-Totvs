function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	
	var datasetEstadosBR = DatasetBuilder.newDataset();
	
	datasetEstadosBR.addColumn("CODESTADO");
	datasetEstadosBR.addColumn("NOMEESTADO");
	
	datasetEstadosBR.addRow(new Array("AC", "Acre"));
	datasetEstadosBR.addRow(new Array("AL", "Alagoas"));
	datasetEstadosBR.addRow(new Array("AM", "Amazonas"));
	datasetEstadosBR.addRow(new Array("AP", "Amapá"));
	datasetEstadosBR.addRow(new Array("BA", "Bahia"));
	datasetEstadosBR.addRow(new Array("CE", "Ceará"));
	datasetEstadosBR.addRow(new Array("DF", "Distrito Federal"));
	datasetEstadosBR.addRow(new Array("ES", "Espírito Santo"));
	datasetEstadosBR.addRow(new Array("GO", "Goiás"));
	datasetEstadosBR.addRow(new Array("MA", "Maranhão"));
	datasetEstadosBR.addRow(new Array("MT", "Mato Grosso"));
	datasetEstadosBR.addRow(new Array("MS", "Mato Grosso do Sul"));
	datasetEstadosBR.addRow(new Array("MG", "Minas Gerais"));
	datasetEstadosBR.addRow(new Array("PA", "Pará"));
	datasetEstadosBR.addRow(new Array("PH", "Paraíba"));
	datasetEstadosBR.addRow(new Array("PR", "Paraná"));
	datasetEstadosBR.addRow(new Array("PR", "Pernambuco"));
	datasetEstadosBR.addRow(new Array("PI", "Piauí"));
	datasetEstadosBR.addRow(new Array("RJ", "Rio de Janeiro"));
	datasetEstadosBR.addRow(new Array("RN", "Rio Grande do Norte"));
	datasetEstadosBR.addRow(new Array("RO", "Rondônia"));
	datasetEstadosBR.addRow(new Array("RS", "Rio Grande do Sul"));
	datasetEstadosBR.addRow(new Array("RR", "Roraima"));
	datasetEstadosBR.addRow(new Array("SC", "Santa Catarina"));
	datasetEstadosBR.addRow(new Array("SE", "Sergipe"));
	datasetEstadosBR.addRow(new Array("SP", "São Paulo"));
	datasetEstadosBR.addRow(new Array("TO", "Tocantins"));
	
	return datasetEstadosBR;

}function onMobileSync(user) {

}