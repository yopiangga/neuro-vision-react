export function MapComponent() {
  return (
    <div className="flex justify-center">
      <div className="w-10/12 py-32 rounded-lg overflow-hidden flex justify-center">
        <div
          class="mapouter"
          style={{
            position: "relative",
            textAlign: "right",
            height: "412px",
            width: "1080px",
          }}
        >
          <div
            class="gmap_canvas"
            style={{
              overflow: "hidden",
              background: " none!important",
              height: "412px",
              width: "1080px",
            }}
          >
            <iframe
              width="1080"
              height="412"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=politeknik%20elektronika%20negeri%20surabaya&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
