import React from 'react';
import Particles from 'react-particles-js';
import Axios from 'axios';
import Toaster from './Toaster'
import './App.css';
 import { toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
 toast.configure()
const particleOptions = {
	particles: {
		number: {
			value: 300,
			density: {
				enable: true,
				value_area: 700
			}
		},
		color: {
			value: ['#aa73ff', '#f8c210', '#83d238', '#33b1f8']
		},
		shape: {
			type: 'circle',
			stroke: {
				width: 0,
				color: '#000000'
			},
			polygon: {
				nb_sides: 15
			}
		},
		opacity: {
			value: 0.5,
			random: false,
			anim: {
				enable: false,
				speed: 5.5,
				opacity_min: 0.15,
				sync: false
			}
		},
		size: {
			value: 5.5,
			random: false,
			anim: {
				enable: true,
				speed: 2,
				size_min: 0.15,
				sync: false
			}
		},
		line_linked: {
			enable: true,
			distance: 110,
			color: '#33b1f8',
			opacity: 0.25,
			width: 1
		},
		move: {
			enable: true,
			speed: 4,
			direction: 'none',
			random: false,
			straight: false,
			out_mode: 'out',
			bounce: false,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200
			}
		}
	},
	interactivity: {
		detect_on: 'canvas',
		events: {
			onhover: {
				enable: false,
				mode: 'repulse'
			},
			onclick: {
				enable: false,
				mode: 'push'
			},
			resize: true
		},
		modes: {
			grab: {
				distance: 400,
				line_linked: {
					opacity: 1
				}
			},
			bubble: {
				distance: 400,
				size: 60,
				duration: 2,
				opacity: 8,
				speed: 3
			},
			repulse: {
				distance: 200,
				duration: 0.4
			},
			push: {
				particles_nb: 4
			},
			remove: {
				particles_nb: 2
			}
		}
	},
	retina_detect: true
};

class App extends React.Component {
	state = {
		fileName: null,
		fileExtension: null,
		file: null,
		state:null
	};

	handleFileChange = e => {
		const file = e.target.files[0];
		const fileExt = file.name.slice(((file.name.lastIndexOf('.') - 2) >>> 0) + 2);
		const fileName = file.name.replace(fileExt, '');
		this.setState({
			file,
			fileName,
			fileExtension: fileExt,
			state:null
		});
	};

	handleSubmit = async e => {
		e.preventDefault();
		try {
			let { data } = await Axios.post('/getUploadLink', { fileName: this.state.fileName, fileExtension: this.state.fileExtension });
			let uploadResult = await Axios.put(data.uploadLink, this.state.file);
			// toast("uploaderd")
			console.log(uploadResult)
			this.setState({
				...this.state,
				state:"uploaded"
			});
			console.log("successfully  uploaded")
			
		} catch (err) {
			this.setState({
				...this.state,
				state:"error"

			})
			console.log(err);
		}
		// let form = new FormData();
		// form.append('file');
	};

	render() {
		
		return (
			
			<div className='App'>
				<Particles className='particles' params={particleOptions} />
				<div className='body'>
					<div className='container py-5'>
					
					<div>
						{
							(()=>{
								if(this.state.state){
									return (
										<Toaster msg={this.state.state} />
									)
								}
							
									
								
								})()
							}
						
					</div>
						<div className='row'>
							<div className='col-md-12'>
								<h2 className='text-center text-white mb-4'>Phosphene AI</h2>
								<h6 className='text-center text-white mb-4'>Department of Computational Linguistics </h6>
								<div className='animated fadeInLeftBig'>
									<div className=' card bg-success  text-black content'>
										<div className='card-body'>
										
				
		
											<p>
												We still remember our first hobby project. We collected some transcripts of certain public speakers to
												analyze what made them so special. Working with text is such a beauty. The complexity behind it and
												the potential that we see in the amount of Natural Language data are huge drivers for us to keep
												working on more. We have come a long way from that hobby project, but this one that we will be working
												on for the next few months is even more special. At Phosphene AI we believe that talent is everywhere
												but opportunity is not. Many of us here have had a huge headstart that has helped us grab
												opportunities easily, while many don’t have that deserving chance. That’s why we decided to contribute
												to fix that gap by leveraging the power of AI and data. But we need your help. For our next project,
												we want a huge repository of Resumes that we can use to build state of the art parsing engines and
												clustering engines. We don’t want to scrape information from the Internet as we believe in your right
												privacy. So we decided to build a portal where people can upload their resumes and help us build some
												awesome software. Your tiny contribution can not only help us, but also many students around the world
												who aspire to do more. Use the form below to submit your resume. Thank You!!
											</p>
											<center>
												<address>
													<b>For more details : </b>
													<br />
													<a href='mailto:praveenbenedict@phoenicorn.com'>praveenbenedict@phoenicorn.com</a>
													<br />
													<a href='mailto:linguisticsresearch@phoenicorn.com'>linguisticsresearch@phoenicorn.com</a>
													<br />
												</address>
											</center>
										</div>
									</div>
								</div>
								<br />
								<div className='row'>
									<div className='col-md-6 mx-auto'>
										<div className='animated fadeInRightBig'>
											<div className=' card bg-success  text-black white-card'>
												<div className='card-body'>
													<form className='form' onSubmit={this.handleSubmit} encType='multipart/form-data'>
														<div className='form-group'>
															<br />
															<center>
																<div className='btn-group b'>
																	&nbsp;&nbsp;&nbsp; <h4 className=' p-90'>Upload your resume</h4>
																	&nbsp;&nbsp;&nbsp;
																</div>
															</center>
														</div>
														<div id='fileinput'>
															<div className='form-group  '>
																<input
																	type='file'
																	onChange={this.handleFileChange}
																	className='form-control form-control-lg rounded-0 white-card'
																	required={true}
																/>
															</div>
														</div>
														<button type='submit' className='btn btn-success btn-lg float-right' id='btnLogin'>
															Send
														</button>
													</form>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
