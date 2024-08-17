
export class ClientAPI {
	constructor(Manager) {
		this.manager = Manager
	}

	async getAllClients() {
		try {
			const response = await fetch(this.manager.apiURL + `client/api/v1/all/`,
				{
					method: 'GET',
					headers: {
						'Authorization': 'Token ' + this.manager.cookie,
						'X-CSRFToken': this.manager.cookie,
						'Content-Type': 'application/json'
					}
				});

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const data = await response.json();

			console.log(data)
			return data;

		} catch (error) {
			console.error('Error fetching client data:', error);
			throw error;
		}
	}

	async getClientDetails(userID) {
		try {
			const response = await fetch(this.manager.apiURL + `client/api/v1/${userID}/details/`,
				{
					method: 'GET',
					headers: {
						'Authorization': 'Token ' + this.manager.cookie,
						'X-CSRFToken': this.manager.cookie,
						'Content-Type': 'application/json'
					}
				});

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const data = await response.json();

			console.log(data)
			return data;

		} catch (error) {
			console.error('Error fetching client detail data:', error);
			throw error;
		}
	}


}

