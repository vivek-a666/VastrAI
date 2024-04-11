import pinecone      

pinecone.init(      
	api_key='6293d6eb-b73b-4c3c-bb54-ee2123fe78c1',      
	environment='gcp-starter'      
)      
index = pinecone.Index('final-database')