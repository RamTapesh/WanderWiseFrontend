import api from "@/api/axios";
import React, { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { toast } from "sonner";

const AcceptInvitation = () => {
  const { id } = useParams();

  const [searchParams] = useSearchParams();

  const token = searchParams.get("token");

  const Navigate = useNavigate();

  const acceptInvitation = async () => {
    try {
      const response = await api.get(
        `/trips/${id}/invite/accept?token=${token}`,
      );
      if (response.data.success) {
        toast.success("Invitation accepted successfully");
      } else {
        toast.info("responce.data?.message");
      }
    } catch (error) {
      console.error("Error");
      toast.info("User already exists or some error occured");
    } finally {
      Navigate(`/trips`);
    }
  };

  useEffect(() => {
    console.log("Trip ID:", id);
    console.log("Token:", token);
    if (id && token) {
      acceptInvitation();
    }
  }, [id, token]);

  return <div>AcceptInvitation</div>;
};

export default AcceptInvitation;