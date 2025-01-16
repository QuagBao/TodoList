function ItemCard() {
  return (
    <>
      <div className="bg-slate-50 rounded-lg p-2 group flex flex-col hover:outline-none hover:ring hover:ring-violet-300">
        <div className="frame grid grid-cols-6">
          {/* Tags Color */}
          <div className="frame-tags col-start-1 col-end-6 grid grid-cols-5 justify-around items-center p-2 gap-2">
            <div className="tag-item h-2 rounded bg-sky-400"></div>
            <div className="tag-item h-2 rounded bg-violet-400"></div>
            <div className="tag-item h-2 rounded bg-red-400"></div>
            <div className="tag-item h-2 rounded bg-blue-400"></div>
            <div className="tag-item h-2 rounded bg-orange-400"></div>
            <div className="tag-item h-2 rounded bg-pink-400"></div>
            <div className="tag-item h-2 rounded bg-purple-400"></div>
            <div className="tag-item h-2 rounded bg-yellow-400"></div>
            <div className="tag-item h-2 rounded bg-sky-900"></div>
          </div>
          {/* Button Edit */}
          <div className="relative top-1">
            <button className="p-3 w-fit absolute right-0 hidden rounded-full bg-transparent hover:bg-sky-300 group-hover:block z-10">
              <svg
                width={15}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
              </svg>
            </button>
          </div>
        </div>
        <h1 className="p-2 font-normal text-sky-800">Hello</h1>
        <div className="frame-tags flex hidden text-sky-800 items-center p-2 gap-2">
          <svg
            className="fill-current"
            width={15}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
          </svg>
          <div className="content ">
            <h6>1/2</h6>
          </div>
        </div>
      </div>
    </>
  );
}
export default ItemCard;
