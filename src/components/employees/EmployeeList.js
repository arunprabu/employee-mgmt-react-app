import React, { Component } from 'react';
import axios from 'axios';

class EmployeeList extends Component{

    constructor(){
				super();
				this.state ={
						empList: []
				}
				// DON'T DO AJAX CALLS HERE 
    }

		componentWillMount(){
			console.log("inside Component Will Mount");
		}

		componentDidMount(){
			console.log("Inside Component Did Mount");
			// send ajax calls  
			axios.get('http://jsonplaceholder.typicode.com/users')
				.then( (response) => {
					// handle success
					console.log(response);
					this.setState({
						empList: response.data
					});
				})
				.catch( (error) => {
					// handle error
					console.log(error);
				})
				.finally( () => {
					// always executed
				});
		}

    render(){
			let employees = null; 
			if(this.state.empList && this.state.empList.length > 0) {
				employees = this.state.empList.map( (employee) =>{
					console.log(employee);
					return(
						<div className="col-md-6">
							<div className="card flex-md-row mb-4 box-shadow h-md-250">
								<div className="card-body d-flex flex-column align-items-start">
									<strong 
									className="d-inline-block mb-2 text-primary">{employee.website}</strong>
									<h3 className="mb-0">
											<a className="text-dark" href="#">{employee.name}</a>
									</h3>
									<div className="mb-1 text-muted">#{employee.id}</div>
									<p className="card-text mb-auto">{employee.phone}</p>
									<a href="#">View Details</a>
								</div>
							</div>
						</div>
					)
				})
			}

			return(
				<div className="container text-left">
					<div className="row mb-2">
						
						{employees}

					</div>
				</div>
			)
    }
}

export default EmployeeList;