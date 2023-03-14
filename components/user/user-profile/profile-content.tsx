

export default function ProfileContent() {
  return (
    <div className="container grid grid-cols-12 mx-auto -z-10">
      <div className="card rounded-t-none col-start-4 col-span-6 pb-96 bg-zinc-800 mb-10 -z-10">
        <div className="card mx-11 mt-24 bg-black">
            <div>
            <label htmlFor="month"><p>Products</p></label>
          <input type="text" id="search" placeholder="Product name" />
            </div>

        </div>
      </div>
    </div>
  );
}
