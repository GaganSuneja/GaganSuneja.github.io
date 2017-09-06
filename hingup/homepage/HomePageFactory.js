(function()
		{
			angular.module('HingUp',[])
			        .factory('HomePageFactory',HomePageFactory)


			        function HomePageFactory($http)
			        	{

			        		this.FactoryObject = {};

			        		this.FactoryObject.GetPost = function ()
			        		{
			        			$http.get('')

			        			return 
			        		}

			        		this.FactoryObject.PutPost = function(PostDetails)
			        		{


			        			ChandraClinicDatabase.ref("posts/").set(PostDetails);
			        		}


			        		return this.FactoryObject;
			        		

			        	}

		}
)()