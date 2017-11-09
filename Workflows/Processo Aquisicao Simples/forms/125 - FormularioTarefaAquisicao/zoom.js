    //cria um zoom baseado em um dataset

       function zoomDataSet(titulo, dataset, campos, resultFields, type) {                
             window.open("/webdesk/zoom.jsp?datasetId="+dataset+"&dataFields="+campos+"&resultFields="+resultFields+"&type="+type+"&title="+titulo, "zoom" , "status , scrollbars=no ,width=600, height=350 , top=0 , left=0");                      
       }      
     
       //busca informa��es do dataset colleague
       //o type � o nome do componente do html
       function zoom(componente) {
             
             if (componente == 'btItem'){                                    
                    //passagem de parametros para fun��o zoomFich�rio: Titulo, dataset, campos, type
                    zoomDataSet('Itens', 'ds_lista_itens', 
										'CodItem,CodItem, Item,Item, Unidade,Unidade', 
                                        'CodItem,Item,Unidade', 
                                        componente); 
              
                    
             }
       }
             
                  
       //atribui o valor selecionado do zoom para o campo do formul�rio
       function setSelectedZoomItem(selectedItem) {       
             
                       
             if (selectedItem.type == "btItem") {
            	 	document.getElementsByName("CCODITEM")[0].value = selectedItem.CodItem;
            	 	document.getElementsByName("CITEM")[0].value = selectedItem.Item;                    
                    document.getElementsByName("CUNIDADE")[0].value = selectedItem.Unidade;                    
              }
             
       }

             
 

      