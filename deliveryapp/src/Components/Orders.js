import React from 'react';
import '../App.scss';
import brand from '../blue.png';
import OrderTable from './OrderTable';

function Orders() {
  return (
    <div className="Orders">
    <nav class="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
    <div class="scrollbar-inner">
    
      <div class="sidenav-header  align-items-center">
        <p class="navbar-brand">
          <img src={brand} class="navbar-brand-img" alt="..."/>
        </p>
      </div>
      <div class="navbar-inner">
  
        <div class="collapse navbar-collapse" id="sidenav-collapse-main">
      
          <ul class="navbar-nav">
            {/* <li class="nav-item">
              <p class="nav-link" href="#">
              <i class="fas fa-tv"></i>
                <span class="nav-link-text">Dashboard</span>
              </p>
            </li> */}
         
            <li class="nav-item">
              <p class="nav-link active" href="#">
              <i class="fas fa-list-ul"></i>
                <span class="nav-link-text">Orders</span>
              </p>
            </li>
          </ul>
          <hr class="my-3"/>
        </div>
      </div>
    </div>
  </nav>
  <div class="main-content" id="panel">
    <nav class="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
       
         
        </div>
      </div>
    </nav>
    <div class="header bg-primary pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col-lg-6 col-7">
              <h6 class="h2 text-white d-inline-block mb-0">Orders</h6>
              <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
                <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                  <li class="breadcrumb-item"><a href=".Orders"><i class="fas fa-home"></i></a></li>
                  <li class="breadcrumb-item"><a href=".Orders">Orders</a></li>
                </ol>
              </nav>
            </div>
            <div class="col-lg-6 col-5 text-right">
              <button class="btn btn-sm btn-neutral">New</button>
              <button class="btn btn-sm btn-neutral">Filters</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid mt--6">
<OrderTable/>
      
    </div>
  </div>
    </div>
  );
}

export default Orders;
