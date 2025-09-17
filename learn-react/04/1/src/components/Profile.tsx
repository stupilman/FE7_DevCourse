interface Profile {
  backgroundImg: string;
  userImg: string;
  userName: string;
  instaId: string;
  clickHandler: () => void;
}

export default function Profile({
  backgroundImg,
  userImg,
  userName,
  instaId,
  clickHandler,
}: Profile) {
  return (
    <>
      <article className="card">
        <div>
          <img className="card-img" src={backgroundImg} alt="background-pic" />
        </div>
        <div className="profile">
          <img className="prof-img" src={userImg} alt="profile-pic" />
          <h3 className="alias">{userName}</h3>
          <p className="username">{instaId}</p>
          <button onClick={clickHandler}>Follow</button>
        </div>
      </article>
    </>
  );
}
