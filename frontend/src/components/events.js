import Navbar from "./Navbar.js";
function events() {
  return (
  <>
    <Navbar/>
    <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/326461/pexels-photo-326461.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          </div>
          </main>
    </>
  );
}

export default events;
