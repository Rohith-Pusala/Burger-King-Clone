import React,{Component} from "react";
export default class Header extends Component{
    render(){
        return(
            <header>
                <div id="container">
                    <div className="menuIcon">
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <div className="logo">
                        <svg viewBox="0 0 170 22" fill="none" className="r-18yzcnr r-62p4ah"><path d="M165.158 2.50933C163.886 1.51012 162.069 0.872906 159.315 0.872906C154.53 0.872906 149.866 3.96001 149.865 11.1063C149.863 17.9503 154.526 21.1309 159.129 21.1309C163.974 21.1309 167.033 18.1048 167.034 13.6836C167.034 10.8677 165.31 8.92893 161.857 8.92893H160.857C159.041 8.92893 157.617 9.77629 157.617 11.6839C157.617 13.3799 159.13 14.1975 160.281 14.1975C160.856 14.1975 161.219 14.3791 161.219 14.8035C161.219 15.3485 160.584 15.7119 159.826 15.7119C157.525 15.7119 155.949 14.1066 155.951 11.1077C155.951 7.77652 158.101 6.56581 159.767 6.56581C161.827 6.56581 162.159 7.5962 163.583 7.5962C165.218 7.5962 166.339 6.26483 166.339 4.87109C166.339 3.81087 165.855 3.05435 165.158 2.50933ZM123.366 17.8228L123.369 4.25692C123.369 2.44018 124.49 0.986791 126.549 0.986791C128.609 0.986791 129.729 2.44154 129.729 4.25828L129.726 17.8242C129.726 19.6409 128.605 21.0943 126.545 21.0943C124.486 21.0943 123.366 19.6396 123.366 17.8228ZM89.8161 9.51869C89.2711 9.51869 88.9986 9.21635 88.9986 8.82182V6.7624C88.9986 6.36922 89.2711 6.06553 89.8161 6.06553H90.2703C91.603 6.06553 92.026 6.9739 92.026 7.7616C92.026 8.51813 91.6016 9.51733 90.2689 9.51733H89.8147L89.8161 9.51869ZM65.4108 2.48899C64.139 1.48978 62.3223 0.85257 59.5674 0.85257C54.7828 0.85257 50.119 3.93967 50.1176 11.086C50.1163 17.9299 54.7788 21.1106 59.3816 21.1106C64.2272 21.1106 67.2858 18.0845 67.2872 13.6633C67.2872 10.8473 65.5626 8.90859 62.1094 8.90859H61.1102C59.2935 8.90859 57.8699 9.75595 57.8699 11.6635C57.8699 13.3596 59.383 14.1771 60.534 14.1771C61.1089 14.1771 61.4722 14.3588 61.4722 14.7832C61.4722 15.3282 60.8364 15.6915 60.0785 15.6915C57.7777 15.6915 56.2023 14.0863 56.2037 11.0873C56.2037 7.75618 58.354 6.54547 60.0202 6.54547C62.0796 6.54547 62.4118 7.57586 63.8354 7.57586C65.4704 7.57586 66.5916 6.24449 66.5916 4.85075C66.5916 3.79054 66.1076 3.03401 65.4108 2.48899ZM77.8242 13.3623H75.5831C75.0381 13.3623 74.7954 13.6647 74.7954 14.0578V14.6327C74.7954 15.0259 75.0368 15.3295 75.5831 15.3295H78.4899C80.2768 15.3295 81.6991 16.3301 81.6991 18.117C81.6991 19.9338 80.2755 20.933 78.4886 20.933H72.4025C69.8591 20.9316 68.6484 19.5379 68.6484 17.6601L68.6511 4.30573C68.6511 2.42798 69.8631 1.0356 72.4066 1.0356H78.4926C80.2796 1.03696 81.7018 2.03616 81.7018 3.82307C81.7018 5.63981 80.2782 6.63902 78.4913 6.63902H75.5845C75.0395 6.63902 74.7968 6.94136 74.7968 7.33453V7.81855C74.7968 8.21172 75.0395 8.51542 75.5845 8.51542H77.8256C79.34 8.51542 80.5805 9.39396 80.5805 10.9395C80.5805 12.4851 79.3387 13.3623 77.8242 13.361V13.3623ZM138.053 12.9502V17.8255C138.052 19.6423 136.871 21.0957 134.902 21.0957C132.813 21.0957 131.662 19.6409 131.663 17.8242L131.666 4.34912C131.666 2.50255 132.848 0.988147 134.967 0.988147C136.178 0.988147 137.329 1.4125 138.419 3.59259L141.204 9.19466C141.356 9.52818 141.538 9.55801 141.658 9.55801C141.84 9.55801 141.961 9.37633 141.961 9.04281V4.26099C141.961 2.44425 143.113 0.990859 145.202 0.990859C147.201 0.990859 148.352 2.44561 148.35 4.26235L148.348 17.7374C148.348 19.6152 147.165 21.0984 145.046 21.0984C143.836 21.0984 142.685 20.6442 141.626 18.4939L138.811 12.8308C138.659 12.5285 138.478 12.4675 138.387 12.4675C138.144 12.4675 138.053 12.6193 138.053 12.9515V12.9502ZM112.222 17.8499V14.0944C112.222 13.8517 112.314 13.6701 112.555 13.6701C112.828 13.6701 112.948 13.8517 113.039 14.1243C113.614 15.8203 114.734 18.4248 116.006 19.7263C116.793 20.5439 117.793 21.0889 118.851 21.0902C120.577 21.0902 122.244 19.7589 122.244 17.9421C122.244 16.7911 121.548 16.0345 120.972 15.3987C119.761 14.0361 118.399 12.2492 117.944 11.0073C117.854 10.7646 117.763 10.5531 117.763 10.4013C117.763 10.1586 117.854 10.0081 118.065 9.79527C118.883 8.97773 120.76 7.10134 121.457 5.61677C121.669 5.16258 121.943 4.52672 121.943 3.89086C121.943 2.19479 120.459 0.98408 118.763 0.982724C117.734 0.982724 116.522 1.40573 115.675 3.13163C114.917 4.70568 113.857 6.40176 113.039 7.33996C112.828 7.58264 112.737 7.6423 112.555 7.6423C112.312 7.6423 112.222 7.43079 112.222 7.21794V4.25421C112.222 2.43747 111.042 1.01391 109.044 1.01391C106.984 1.01391 105.833 2.43612 105.833 4.25286L105.831 17.8486C105.831 19.6355 106.98 21.0889 109.04 21.0889C111.038 21.0889 112.219 19.6355 112.22 17.8499H112.222ZM83.0006 17.8133C83.0006 19.6301 84.1205 21.0835 86.1799 21.0848C88.2393 21.0848 89.3592 19.6314 89.3605 17.8147V14.6042C89.3605 14.211 89.5436 14.0294 89.8757 14.0294C90.2689 14.0294 90.3909 14.2409 90.4506 14.6042C90.7231 16.1484 91.5095 18.2377 92.388 19.2979C93.5079 20.6306 94.5071 21.0848 95.5375 21.0848C97.2023 21.0848 98.6571 19.8443 98.6571 18.3001C98.6571 17.271 98.2029 16.5131 97.6281 15.8163C96.538 14.5134 95.8425 13.666 95.448 12.6058C95.3571 12.3631 95.387 12.1516 95.6907 11.9401C96.6899 11.2432 97.8409 9.60953 97.8423 7.06473C97.8423 3.2184 94.4827 1.03831 90.3936 1.03696H86.7602C84.2167 1.03696 83.0047 2.42798 83.0047 4.30573L83.002 17.8106L83.0006 17.8133ZM34.2171 17.8038C34.2171 19.6206 35.3369 21.074 37.3964 21.0753C39.4558 21.0753 40.5757 19.6219 40.577 17.8052V14.5947C40.577 14.2015 40.7899 14.0199 41.0922 14.0199C41.4854 14.0199 41.6074 14.2314 41.6982 14.5947C42.0914 16.1091 42.7571 18.2282 43.6045 19.2884C44.6945 20.651 45.7235 21.0753 46.7539 21.0753C48.45 21.0753 49.8736 19.8348 49.8736 18.2906C49.8736 17.2615 49.4194 16.5036 48.8445 15.8068C47.9063 14.6557 47.059 13.6565 46.6645 12.5963C46.5736 12.3536 46.6346 12.1421 46.937 11.9306C47.9362 11.2337 49.0872 9.60004 49.0886 7.05524C49.0886 3.20891 45.6978 1.02882 41.6101 1.02746H38.0065C35.463 1.02746 34.2211 2.41849 34.2211 4.29624L34.2184 17.8011L34.2171 17.8038ZM41.0326 9.50784C40.4875 9.50784 40.2449 9.20551 40.2449 8.81097V6.75155C40.2449 6.35838 40.4875 6.05468 41.0326 6.05468H41.4867C42.8493 6.05468 43.2737 6.96305 43.2737 7.75076C43.2737 8.50728 42.8493 9.50649 41.4867 9.50649H41.0326V9.50784ZM6.45078 12.6207H7.02563C8.56986 12.6207 9.02404 13.5901 9.02404 14.4686C9.02404 15.2563 8.56986 16.3762 7.02563 16.3762H6.45078C5.90576 16.3762 5.66308 16.0725 5.66308 15.6793V13.3176C5.66308 12.9244 5.90576 12.6207 6.45078 12.6207ZM6.45078 8.98722C5.90576 8.98722 5.66308 8.68489 5.66308 8.29036V6.23093C5.66308 5.83776 5.90576 5.53406 6.45078 5.53406H6.87514C8.26752 5.53406 8.69188 6.44243 8.69188 7.23014C8.69188 7.95684 8.26752 8.98587 6.87514 8.98587H6.45078V8.98722ZM3.75279 20.9181H8.29599C12.5653 20.9194 15.1698 18.2255 15.1711 14.8645C15.1711 12.1692 13.4764 10.9273 13.0832 10.625C12.9314 10.5043 12.7497 10.3823 12.7497 10.2617C12.7497 10.1098 12.8406 10.0502 13.0222 9.86848C13.6581 9.23262 14.2343 8.14258 14.2343 6.59835C14.2343 2.96487 11.6312 1.02611 7.60319 1.02475H3.75821C1.21478 1.02204 0.00271155 2.41442 0.00271155 4.29217L0 17.6466C0 19.5243 1.21071 20.9167 3.75414 20.9181H3.75279ZM24.404 21.074C19.2859 21.074 16.5622 17.9842 16.5622 14.108V4.23523C16.5649 2.41849 17.6847 0.965099 19.7442 0.965099C21.8036 0.965099 22.9533 2.41985 22.9533 4.23659V13.9263C22.9506 14.7438 23.3451 15.5912 24.404 15.5926C25.4642 15.5926 25.9184 14.7452 25.9184 13.9277V4.23659C25.9211 2.41985 27.041 0.966455 29.1004 0.966455C31.1598 0.966455 32.2797 2.4212 32.2797 4.23794V14.1107C32.277 17.9869 29.5207 21.0753 24.4026 21.074H24.404Z" fill="#502314"></path><path d="M167.036 19.9528C167.036 19.2735 167.562 18.7054 168.283 18.7054C169.004 18.7054 169.53 19.2735 169.53 19.9528C169.53 20.6822 169.004 21.2082 168.283 21.2082C167.562 21.2082 167.036 20.674 167.036 19.9528ZM169.259 19.9528C169.259 19.325 168.767 18.9603 168.284 18.9603C167.802 18.9603 167.308 19.325 167.308 19.9528C167.308 20.5805 167.8 20.9547 168.283 20.9547C168.766 20.9547 169.259 20.6076 169.259 19.9541V19.9528ZM167.85 20.4869V19.4267C167.85 19.3589 167.91 19.2911 167.978 19.2911H168.335C168.614 19.2911 168.809 19.4606 168.809 19.6897C168.809 19.885 168.699 20.0544 168.444 20.0965L168.724 20.411C168.749 20.4368 168.766 20.4707 168.766 20.4964C168.766 20.5723 168.714 20.6239 168.638 20.6239C168.587 20.6239 168.553 20.5981 168.528 20.5642L168.156 20.1236H168.114V20.4883C168.114 20.5561 168.054 20.6157 167.978 20.6157C167.91 20.6157 167.85 20.5561 167.85 20.4883V20.4869ZM168.301 19.885C168.454 19.885 168.538 19.809 168.538 19.7074C168.538 19.5975 168.462 19.5379 168.326 19.5379H168.115V19.8863H168.302L168.301 19.885Z" fill="#502314"></path></svg>
                    </div>
                    <div className="contactIcon">
                        <i className="fa-solid fa-user"></i>
                    </div>
                    <div className="viewCart">
                        <i className="fa-solid fa-bag-shopping"></i> View Cart
                    </div>
                </div>

                <div className="subContainer">
                    <div className="bKOrder">
                        <div className="mainHead">
                            <h1>Start your</h1>
                            <h1>BK® order.</h1>
                        </div>
                        <div className="orderDetails">
                            <button>
                            <div className="orderPickup">
                                <i className="fa-solid fa-bag-shopping"></i>
                                <p>Order Pickup</p>
                            </div>
                            </button>
                            
                            <button>
                            <div className="orderDelivery">
                                <i className="fa-solid fa-motorcycle"></i>
                                <p>Order Delivery</p>
                            </div>
                            </button>
                        </div>
                    </div>

                    <div className="mainImg">
                        <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/992ab9282f7352ad6d92ce74d86446c8ad758336-800x450.png?w=1125&q=90&fit=max&auto=format" alt="Main Image" />
                    </div>
                </div>
            </header>
        )
    }
}