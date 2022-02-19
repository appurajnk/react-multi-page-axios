import React from 'react';
  
const Dashboard = () => {
  return (
    <>
    
    <div className="container-scroller">
    <div className="row p-0 m-0 proBanner" id="proBanner">
      <div className="col-md-12 p-0 m-0">
     
      </div>
    </div>

    <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <a className="navbar-brand brand-logo me-5" href="index.html"><img src="images/logo.svg" className="me-2" alt="logo"/></a>
        <a className="navbar-brand brand-logo-mini" href="index.html"><img src="images/logo-mini.svg" alt="logo"/></a>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
        <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
          <span className="ti-view-list"></span>
        </button>
        <ul className="navbar-nav mr-lg-2">
          <li className="nav-item nav-search d-none d-lg-block">
            <div className="input-group">
              <div className="input-group-prepend hover-cursor" id="navbar-search-icon">
                <span className="input-group-text" id="search">
                  <i className="ti-search"></i>
                </span>
              </div>
              <input type="text" className="form-control" id="navbar-search-input" placeholder="Search now" aria-label="search" aria-describedby="search"/>
            </div>
          </li>
        </ul>
        <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item dropdown me-1">
            <a className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center" id="messageDropdown" href="#" data-bs-toggle="dropdown">
              <i className="ti-email mx-0"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="messageDropdown">
              <p className="mb-0 font-weight-normal float-left dropdown-header">Messages</p>
              <a className="dropdown-item">
                <div className="item-thumbnail">
                    <img src="images/faces/face4.jpg" alt="image" className="profile-pic"/>
                </div>
                <div className="item-content flex-grow">
                  <h6 className="ellipsis font-weight-normal">David Grey
                  </h6>
                  <p className="font-weight-light small-text text-muted mb-0">
                    The meeting is cancelled
                  </p>
                </div>
              </a>
              <a className="dropdown-item">
                <div className="item-thumbnail">
                    <img src="images/faces/face2.jpg" alt="image" className="profile-pic"/>
                </div>
                <div className="item-content flex-grow">
                  <h6 className="ellipsis font-weight-normal">Tim Cook
                  </h6>
                  <p className="font-weight-light small-text text-muted mb-0">
                    New product launch
                  </p>
                </div>
              </a>
              <a className="dropdown-item">
                <div className="item-thumbnail">
                    <img src="images/faces/face3.jpg" alt="image" className="profile-pic"/>
                </div>
                <div className="item-content flex-grow">
                  <h6 className="ellipsis font-weight-normal"> Johnson
                  </h6>
                  <p className="font-weight-light small-text text-muted mb-0">
                    Upcoming board meeting
                  </p>
                </div>
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-bs-toggle="dropdown">
              <i className="ti-bell mx-0"></i>
              <span className="count"></span>
            </a>
            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="notificationDropdown">
              <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
              <a className="dropdown-item">
                <div className="item-thumbnail">
                  <div className="item-icon bg-success">
                    <i className="ti-info-alt mx-0"></i>
                  </div>
                </div>
                <div className="item-content">
                  <h6 className="font-weight-normal">Application Error</h6>
                  <p className="font-weight-light small-text mb-0 text-muted">
                    Just now
                  </p>
                </div>
              </a>
              <a className="dropdown-item">
                <div className="item-thumbnail">
                  <div className="item-icon bg-warning">
                    <i className="ti-settings mx-0"></i>
                  </div>
                </div>
                <div className="item-content">
                  <h6 className="font-weight-normal">Settings</h6>
                  <p className="font-weight-light small-text mb-0 text-muted">
                    Private message
                  </p>
                </div>
              </a>
              <a className="dropdown-item">
                <div className="item-thumbnail">
                  <div className="item-icon bg-info">
                    <i className="ti-user mx-0"></i>
                  </div>
                </div>
                <div className="item-content">
                  <h6 className="font-weight-normal">New user registration</h6>
                  <p className="font-weight-light small-text mb-0 text-muted">
                    2 days ago
                  </p>
                </div>
              </a>
            </div>
          </li>
          <li className="nav-item nav-profile dropdown">
            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" id="profileDropdown">
              <img src="images/faces/face28.jpg" alt="profile"/>
            </a>
            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
              <a className="dropdown-item">
                <i className="ti-settings text-primary"></i>
                Settings
              </a>
              <a className="dropdown-item">
                <i className="ti-power-off text-primary"></i>
                Logout
              </a>
            </div>
          </li>
        </ul>
        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
          <span className="ti-view-list"></span>
        </button>
      </div>
    </nav>

    <div className="container-fluid page-body-wrapper">

      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="index.html">
              <i className="ti-shield menu-icon"></i>
              <span className="menu-title">Dashboard</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
              <i className="ti-palette menu-icon"></i>
              <span className="menu-title">UI Elements</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="ui-basic">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Buttons</a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Typography</a></li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="pages/forms/basic_elements.html">
              <i className="ti-layout-list-post menu-icon"></i>
              <span className="menu-title">Form elements</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="pages/charts/chartjs.html">
              <i className="ti-pie-chart menu-icon"></i>
              <span className="menu-title">Charts</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="pages/tables/basic-table.html">
              <i className="ti-view-list-alt menu-icon"></i>
              <span className="menu-title">Tables</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="pages/icons/themify.html">
              <i className="ti-star menu-icon"></i>
              <span className="menu-title">Icons</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
              <i className="ti-user menu-icon"></i>
              <span className="menu-title">User Pages</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="auth">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <a className="nav-link" href="pages/samples/login.html"> Login </a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/samples/login-2.html"> Login 2 </a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/samples/register.html"> Register </a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/samples/register-2.html"> Register 2 </a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/samples/lock-screen.html"> Lockscreen </a></li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="documentation/documentation.html">
              <i className="ti-write menu-icon"></i>
              <span className="menu-title">Documentation</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="main-panel">
        <div className="content-wrapper">
          <div className="row">
            <div className="col-md-12 grid-margin">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h4 className="font-weight-bold mb-0">RoyalUI Dashboard</h4>
                </div>
                <div>
                    <button type="button" className="btn btn-primary btn-icon-text btn-rounded">
                      <i className="ti-clipboard btn-icon-prepend"></i>Report
                    </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <p className="card-title text-md-center text-xl-left">Sales</p>
                  <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                    <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">34040</h3>
                    <i className="ti-calendar icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                  </div>  
                  <p className="mb-0 mt-2 text-danger">0.12% <span className="text-black ms-1"><small>(30 days)</small></span></p>
                </div>
              </div>
            </div>
            <div className="col-md-3 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <p className="card-title text-md-center text-xl-left">Revenue</p>
                  <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                    <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">47033</h3>
                    <i className="ti-user icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                  </div>  
                  <p className="mb-0 mt-2 text-danger">0.47% <span className="text-black ms-1"><small>(30 days)</small></span></p>
                </div>
              </div>
            </div>
            <div className="col-md-3 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <p className="card-title text-md-center text-xl-left">Downloads</p>
                  <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                    <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">40016</h3>
                    <i className="ti-agenda icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                  </div>  
                  <p className="mb-0 mt-2 text-success">64.00%<span className="text-black ms-1"><small>(30 days)</small></span></p>
                </div>
              </div>
            </div>
            <div className="col-md-3 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <p className="card-title text-md-center text-xl-left">Returns</p>
                  <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                    <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">61344</h3>
                    <i className="ti-layers-alt icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                  </div>  
                  <p className="mb-0 mt-2 text-success">23.00%<span className="text-black ms-1"><small>(30 days)</small></span></p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <p className="card-title">Sales details</p>
                  <p className="text-muted font-weight-light">Received overcame oh sensible so at an. Formed do change merely to county it. Am separate contempt domestic to to oh. On relation my so addition branched.</p>
                  <div id="sales-legend" className="chartjs-legend mt-4 mb-2"></div>
                  <canvas id="sales-chart"></canvas>
                </div>
                <div className="card border-right-0 border-left-0 border-bottom-0">
                  <div className="d-flex justify-content-center justify-content-md-end">
                    <div className="dropdown flex-md-grow-1 flex-xl-grow-0">
                      <button className="btn btn-lg btn-outline-light dropdown-toggle rounded-0 border-top-0 border-bottom-0" type="button" id="dropdownMenuDate2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Today
                      </button>
                      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuDate2">
                        <a className="dropdown-item" href="#">January - March</a>
                        <a className="dropdown-item" href="#">March - June</a>
                        <a className="dropdown-item" href="#">June - August</a>
                        <a className="dropdown-item" href="#">August - November</a>
                      </div>
                    </div>
                    <button className="btn btn-lg btn-outline-light text-primary rounded-0 border-0 d-none d-md-block" type="button"> View all </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 grid-margin stretch-card">
              <div className="card border-bottom-0">
                <div className="card-body pb-0">
                  <p className="card-title">Purchases</p>
                  <p className="text-muted font-weight-light">The argument in favor of using filler text goes something like this: If you use real content in the design process, anytime you reach a review</p>
                  <div className="d-flex flex-wrap mb-5">
                    <div className="me-5 mt-3">
                      <p className="text-muted">Status</p>
                      <h3>362</h3>
                    </div>
                    <div className="me-5 mt-3">
                      <p className="text-muted">New users</p>
                      <h3>187</h3>
                    </div>
                    <div className="me-5 mt-3">
                      <p className="text-muted">Chats</p>
                      <h3>524</h3>
                    </div>
                    <div className="mt-3">
                      <p className="text-muted">Feedbacks</p>
                      <h3>509</h3>
                    </div> 
                  </div>
                </div>
                <canvas id="order-chart" className="w-100"></canvas>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <p className="card-title mb-0">Top Products</p>
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>User</th>
                          <th>Product</th>
                          <th>Sale</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Jacob</td>
                          <td>Photoshop</td>
                          <td className="text-danger"> 28.76% <i className="ti-arrow-down"></i></td>
                          <td><label className="badge badge-danger">Pending</label></td>
                        </tr>
                        <tr>
                          <td>Messsy</td>
                          <td>Flash</td>
                          <td className="text-danger"> 21.06% <i className="ti-arrow-down"></i></td>
                          <td><label className="badge badge-warning">In progress</label></td>
                        </tr>
                        <tr>
                          <td>John</td>
                          <td>Premier</td>
                          <td className="text-danger"> 35.00% <i className="ti-arrow-down"></i></td>
                          <td><label className="badge badge-info">Fixed</label></td>
                        </tr>
                        <tr>
                          <td>Peter</td>
                          <td>After effects</td>
                          <td className="text-success"> 82.00% <i className="ti-arrow-up"></i></td>
                          <td><label className="badge badge-success">Completed</label></td>
                        </tr>
                        <tr>
                          <td>Dave</td>
                          <td>53275535</td>
                          <td className="text-success"> 98.05% <i className="ti-arrow-up"></i></td>
                          <td><label className="badge badge-warning">In progress</label></td>
                        </tr>
                        <tr>
                          <td>Messsy</td>
                          <td>Flash</td>
                          <td className="text-danger"> 21.06% <i className="ti-arrow-down"></i></td>
                          <td><label className="badge badge-info">Fixed</label></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 grid-margin stretch-card">
							<div className="card">
								<div className="card-body">
									<h4 className="card-title">To Do Lists</h4>
									<div className="list-wrapper pt-2">
										<ul className="d-flex flex-column-reverse todo-list todo-list-custom">
											<li>
												<div className="form-check form-check-flat">
													<label className="form-check-label">
														<input className="checkbox" type="checkbox"/>
														Become A Travel Pro In One Easy Lesson
													</label>
												</div>
												<i className="remove ti-trash"></i>
											</li>
											<li className="completed">
												<div className="form-check form-check-flat">
													<label className="form-check-label">
														<input className="checkbox" type="checkbox" defaultChecked/>
														See The Unmatched Beauty Of The Great Lakes
													</label>
												</div>
												<i className="remove ti-trash"></i>
											</li>
											<li>
												<div className="form-check form-check-flat">
													<label className="form-check-label">
														<input className="checkbox" type="checkbox"/>
														Copper Canyon
													</label>
												</div>
												<i className="remove ti-trash"></i>
											</li>
											<li className="completed">
												<div className="form-check form-check-flat">
													<label className="form-check-label">
														<input className="checkbox" type="checkbox" defaultChecked/>
														Top Things To See During A Holiday In Hong Kong
													</label>
												</div>
												<i className="remove ti-trash"></i>
											</li>
											<li>
												<div className="form-check form-check-flat">
													<label className="form-check-label">
														<input className="checkbox" type="checkbox"/>
														Travelagent India
													</label>
												</div>
												<i className="remove ti-trash"></i>
											</li>
										</ul>
                  </div>
                  <div className="add-items d-flex mb-0 mt-4">
										<input type="text" className="form-control todo-list-input me-2"  placeholder="Add new task"/>
										<button className="add btn btn-icon text-primary todo-list-add-btn bg-transparent"><i className="ti-location-arrow"></i></button>
									</div>
								</div>
							</div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 grid-margin stretch-card">
              <div className="card position-relative">
                <div className="card-body">
                  <p className="card-title">Detailed Reports</p>
                  <div className="row">
                    <div className="col-md-12 col-xl-3 d-flex flex-column justify-content-center">
                      <div className="ml-xl-4">
                        <h1>33500</h1>
                        <h3 className="font-weight-light mb-xl-4">Sales</h3>
                        <p className="text-muted mb-2 mb-xl-0">The total number of sessions within the date range. It is the period time a user is actively engaged with your website, page or app, etc</p>
                      </div>  
                    </div>
                    <div className="col-md-12 col-xl-9">
                      <div className="row">
                        <div className="col-md-6 mt-3 col-xl-5">
                          <canvas id="north-america-chart"></canvas>
                          <div id="north-america-legend"></div>
                        </div>
                        <div className="col-md-6 col-xl-7">
                          <div className="table-responsive mb-3 mb-md-0">
                            <table className="table table-borderless report-table">
                              <thead>
                              <tr>
                                <td className="text-muted">Illinois</td>
                                <td className="w-100 px-0">
                                  <div className="progress progress-md mx-4">
                                    <div className="progress-bar bg-primary" role="progressbar" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                  </div>
                                </td>
                                <td><h5 className="font-weight-bold mb-0">524</h5></td>
                              </tr>
                              <tr>
                                <td className="text-muted">Washington</td>
                                <td className="w-100 px-0">
                                  <div className="progress progress-md mx-4">
                                    <div className="progress-bar bg-primary" role="progressbar" style={{width: "30%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                  </div>
                                </td>
                                <td><h5 className="font-weight-bold mb-0">722</h5></td>
                              </tr>
                              <tr>
                                <td className="text-muted">Mississippi</td>
                                <td className="w-100 px-0">
                                  <div className="progress progress-md mx-4">
                                    <div className="progress-bar bg-primary" role="progressbar" style={{width: "95%"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                  </div>
                                </td>
                                <td><h5 className="font-weight-bold mb-0">173</h5></td>
                              </tr>
                              <tr>
                                <td className="text-muted">California</td>
                                <td className="w-100 px-0">
                                  <div className="progress progress-md mx-4">
                                    <div className="progress-bar bg-primary" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                  </div>
                                </td>
                                <td><h5 className="font-weight-bold mb-0">945</h5></td>
                              </tr>
                              <tr>
                                <td className="text-muted">Maryland</td>
                                <td className="w-100 px-0">
                                  <div className="progress progress-md mx-4">
                                    <div className="progress-bar bg-primary" role="progressbar" style={{width: "40%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                  </div>
                                </td>
                                <td><h5 className="font-weight-bold mb-0">553</h5></td>
                              </tr>
                              <tr>
                                <td className="text-muted">Alaska</td>
                                <td className="w-100 px-0">
                                  <div className="progress progress-md mx-4">
                                    <div className="progress-bar bg-primary" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                  </div>
                                </td>
                                <td><h5 className="font-weight-bold mb-0">912</h5></td>
                              </tr>
                              </thead>
                            </table>
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

        <footer className="footer">
          <div className="d-sm-flex justify-content-center justify-content-sm-between">
            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © <a href="https://www.bootstrapdash.com/" >bootstrapdash.com </a>2021</span>
            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Only the best <a href="https://www.bootstrapdash.com/"> Bootstrap dashboard </a> templates</span>
          </div>
        </footer>

      </div>

    </div>

  </div>
    
    </>
  );
};
  
export default Dashboard;