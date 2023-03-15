import ProfileContent from "./profile-content";
import Banner from "./user-banner";

export default function Profile() {
  return (
    <div className="my-16">
      <Banner />
      <ProfileContent />
    </div>
  );
}
