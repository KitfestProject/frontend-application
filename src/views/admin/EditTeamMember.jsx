import {
  DynamicHelmet,
  UserNavigation,
  CreateTeamMemberComponent,
} from "@/components";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { CreateTeamMemberContext } from "@/context/CreateTeamMemberContext";
import useServerSideQueries from "@/hooks/useServerSideQueries";

const EditTeamMember = () => {
  const { teamMemberFormData, setTeamMemberFormData } = useContext(
    CreateTeamMemberContext
  );
  const location = useLocation();
  const pathname = location.pathname;
  const teamMemberId = pathname.split("/")[2];
  const [teamMemberData, setTeamMemberData] = useState(null);
  const { getSingleTeamMember } = useServerSideQueries();

  console.log(teamMemberId);

  useEffect(() => {
    const fetchTeamMember = async (teamMemberId) => {
      const { success, message, data } = await getSingleTeamMember(
        teamMemberId
      );

      if (!success) {
        toast.error(message, {
          position: "top-right",
        });
        console.log(message);
        return;
      }

      setTeamMemberData(data);
      setTeamMemberFormData((prev) => ({
        ...prev,
        firstName: data.first_name || "",
        lastName: data.last_name || "",
        email: data.email || "",
        phone: data.phone || "",
        position: data.position || "",
        team: data.team || "",
        image: data.image || null,
        socials: data.socials || [],
      }));
    };

    if (teamMemberId) {
      fetchTeamMember(teamMemberId);
    }
  }, [teamMemberId]);

  return (
    <div className="bg-white dark:bg-darkGray dark:text-slate-100 h-auto min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Edit Team Members"
        description="Edit a team member and manage them. You can access this page because you are an authenticated admin."
      />
      <UserNavigation />

      <CreateTeamMemberComponent />
    </div>
  );
};

export default EditTeamMember;
