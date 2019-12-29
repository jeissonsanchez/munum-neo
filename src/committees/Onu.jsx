// React
import React from "react";

// Components
import CommitteeHead from "../layouts/Committee-head";
import CommitteeContent from "../layouts/Committee-content";

//Images
import santiago from "../assets/img/images/santiago.jpg";

export default function Onu() {
  return (
    <div>
      <CommitteeHead image={santiago} title="NACIONES UNIDAS">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium at, nobis ratione necessitatibus excepturi quod culpa distinctio delectus iure? Libero natus nesciunt blanditiis animi provident similique quia possimus earum nisi?
      </CommitteeHead>
      <CommitteeContent></CommitteeContent>
    </div>
  );
}
