
import './top.css';
import loggo from './image/logo.png';

export const Topp = ()=>{

    const reloadPreloader = ()=> window.location.reload();

    return(<div className='toop'>

        <header className='hd___r'>

            <div className='one'>
                <img 
                    src={loggo}
                    alt='logo'
                    className='logo'
                    onClick={reloadPreloader}
                />
            </div>

            <div className='two'>

    
                <select 
                    id="language-switch" 
                    class="icbu-language-swicth" 
                    style={{outline:'none', minWidth:'100px', height:'26px', background:'transparent', borderRadius:'3px'}}
                >
                        <option value="en_US" selected="">English</option>
                        <option value="zh_CN">简体中文</option><option value="zh_TW">繁体中文</option>
                        <option value="es_ES">Español</option><option value="pt_PT">Português</option>
                        <option value="de_DE">Deutsch</option><option value="fr_FR">Français</option>
                        <option value="it_IT">Italiano</option><option value="ru_RU">Pусский</option>
                        <option value="ko_KR">한국어</option><option value="ja_JP">日本語</option>
                        <option value="ar_SA">اللغة العربية</option><option value="tr_TR">Türk</option>
                        <option value="th_TH">ภาษาไทย</option><option value="vi_VN">tiếng Việt</option>
                        <option value="nl_NL">nederlands</option><option value="hi_IN">हिन्दी</option>
                        <option value="iw_HE">עברית</option><option value="in_ID">Bahasa Indonesia</option>
                </select>
            </div>

        </header>
        
    </div>)
};