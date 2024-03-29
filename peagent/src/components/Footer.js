// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://www.facebook.com/" className="text-white hover:text-gray-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.03 0H2.97A2.97 2.97 0 000 2.97V21.03C0 22.587 1.413 24 2.97 24H12v-9.284H9.015V10.8H12V8.229c0-3.79 2.323-5.854 5.691-5.854 1.599 0 2.979.119 3.375.172v3.927h-2.314c-1.818 0-2.167.864-2.167 2.13V10.8h4.355l-.567 4.916h-3.788V24h7.417c1.647 0 2.983-1.336 2.983-2.983V2.97A2.97 2.97 0 0021.03 0z"/>
            </svg>
          </a>
          <a href="https://www.whatsapp.com/" className="text-white hover:text-gray-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm3.927 17.186c-.347 1.015-1.84 1.944-2.773 2.097-.933.154-1.962-.073-3.039-.705a19.81 19.81 0 01-3.646-2.382c-1.338-.983-2.038-1.847-2.337-2.406-.299-.56-.262-1.146.088-1.622.35-.475.892-.84 1.55-1.064.658-.224 1.47-.354 2.406-.467.937-.113 2.038-.216 3.301-.57.975-.271 1.879-.678 2.597-1.32.718-.64 1.13-1.562 1.242-2.715.113-1.152-.032-2.384-.579-3.802-.548-1.417-1.353-2.573-2.687-3.438C9.518.688 8.204.242 6.817.242c-2.434 0-4.61.898-6.255 2.543C.898 4.69 0 6.865 0 9.3c0 2.435.898 4.61 2.543 6.255 1.646 1.646 3.82 2.544 6.255 2.544 1.276 0 2.588-.273 3.942-.853 1.276-.547 2.36-1.31 3.222-2.194.861-.883 1.474-1.92 1.82-3.037.347-1.117.518-2.26.518-3.428 0-.194-.06-.352-.088-.509z"/>
              <path d="M16.23 12.425c-.097-.198-.53-.356-1.223-.543-.693-.187-1.436-.374-2.133-.843-.697-.469-1.28-1.198-1.513-1.392-.232-.193-.405-.237-.605-.252-.2-.015-.443.057-.64.19-.196.133-.606.447-.847.969-.24.52-.417 1.134-.433 1.15-.017.016-.274.158-.506.295-.232.138-.409.248-.585.373-.175.125-.335.24-.49.402-.155.162-.258.36-.363.55-.106.19-.155.39-.083.573.072.184.308.427.49.612.182.186.35.373.41.434.062.06.53.502.7.666.172.167.325.267.48.29.155.023.306-.045.397-.132.093-.087.148-.21.203-.344.055-.133.118-.268.233-.374.114-.105.235-.183.422-.286.187-.104.45-.268.577-.363.127-.096.243-.22.314-.354.071-.135.11-.28.016-.483zm-1.942-1.775c.09-.095.16-.216.215-.35.053-.135.104-.282.132-.426.027-.144.03-.263-.023-.354-.052-.092-.153-.178-.29-.246-.137-.068-.337-.123-.607.071-.27.195-.912.676-1.085.805-.173.13-.31.163-.428.157-.118-.007-.218-.055-.313-.157-.095-.102-.163-.246-.26-.43-.097-.183-.244-.407-.445-.609-.2-.203-.456-.372-.755-.5-.299-.127-.623-.214-.946-.276-.323-.063-.634-.098-.938-.084-.303.014-.58.064-.826.157-.247.094-.43.215-.57.343-.14.129-.23.26-.288.366-.058.106-.113.172-.124.245-.011.073.02.194.12.291.1.097.245.158.405.23.16.072.33.146.45.24.12.093.196.21.29.318.094.107.194.204.282.299.088.095.17.185.233.259.064.073.11.132.156.194.045.062.09.125.146.21.057.085.122.17.23.265.108.095.27.19.412.222.142.033.274.006.38-.042.105-.048.186-.122.258-.206z"/>
            </svg>
          </a>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#hero" className="text-white hover:text-gray-400">Home</a>
          <span>|</span>
          <a href="#about" className="text-white hover:text-gray-400">About</a>
          <span>|</span>
          <a href="#story" className="text-white hover:text-gray-400">Story</a>
          <span>|</span>
          <a href="#workshop" className="text-white hover:text-gray-400">Workshops</a>
          <span>|</span>
          <a href="#contact" className="text-white hover:text-gray-400">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

