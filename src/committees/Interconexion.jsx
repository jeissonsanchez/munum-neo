// React
import React from "react";

// Components
import CommitteeHead from "../layouts/Committee-head";
import CommitteeContent from "../layouts/Committee-content";

//Images
import onuCover from "../assets/img/images/covers/onu-cover.jpg";

export default function Interconexion() {
  return (
    <div>
      <CommitteeHead image={onuCover} title="NACIONES UNIDAS" scroll>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium at, nobis ratione necessitatibus excepturi quod culpa distinctio delectus iure? Libero natus nesciunt blanditiis animi provident similique quia possimus earum nisi?
      </CommitteeHead>
    </div>
  );
}
