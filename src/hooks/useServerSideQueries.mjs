import axiosClient from "@/axiosClient";

const useServerSideQueries = () => {
  let result;

  // Get Upcoming Events
  async function getUpcomingEvents(limit) {
    const upcomingEvents = await axiosClient.get(`/events?limit=${limit}`);

    const { success, message, data } = upcomingEvents.data;

    if (!success) {
      result = {
        success: false,
        message,
      };

      return result;
    }

    result = {
      success: true,
      data,
      message,
    };

    return result;
  }

  // Get Featured Events
  async function getFeaturedEvents(limit) {
    const featuredEvents = await axiosClient.get(
      `/events?limit=${limit}&featured=true`
    );

    const { success, message, data } = featuredEvents.data;

    if (!success) {
      result = {
        success: false,
        message,
      };

      return result;
    }

    result = {
      success: true,
      data,
      message,
    };

    return result;
  }

  // Get current Blogs
  async function getCurrentBlogs(limit) {
    const currentBlogs = await axiosClient.get("/blogs?limit=${limit}");

    const { success, message, data } = currentBlogs.data;

    if (!success) {
      result = {
        success: false,
        message,
      };

      return result;
    }

    result = {
      success: true,
      data,
      message,
    };

    return result;
  }

  const hasNonEmptyKeys = (data) => {
    for (const key in data) {
      if (data[key] && Object.keys(data[key]).length > 0) {
        return true;
      }
    }
    return false;
  };

  // Get Theater Seat Map
  const getTheaterSectionData = async (eventId) => {
    try {
      let result;

      const response = await axiosClient.get(`/seatmap/${eventId}`);

      const { success, message, data } = response.data;

      if (!success && !hasNonEmptyKeys(data)) {
        result = {
          success: false,
          message,
        };
        return result;
      }

      result = {
        success: true,
        data,
        message,
      };

      return result;
    } catch (error) {
      console.error(error);
    }
  };

  // Get Single Event
  async function getSingleEvent(eventId) {
    const singleEvent = await axiosClient.get(`/events/${eventId}`);

    const { success, message, data } = singleEvent.data;

    if (!success) {
      result = {
        success: false,
        message,
      };

      return result;
    }

    result = {
      success: true,
      data,
      message,
    };

    return result;
  }

  // Save contact information
  async function saveContactInfo(requestData) {
    const response = await axiosClient.post("/contact", requestData);

    const { success, message, data } = response.data;

    if (!success) {
      result = {
        success: false,
        message,
      };

      return result;
    }

    result = {
      success: true,
      message,
      data: data,
    };

    return result;
  }

  // Get admin organizers overview data
  async function getAdminOrganizersOverview() {
    const response = await axiosClient.get("/overview");

    const { success, message, data } = response.data;

    if (!success) {
      result = {
        success: false,
        message,
      };

      return result;
    }

    result = {
      success: true,
      data,
      message,
    };

    return result;
  }

  // Get user dashboard overview
  async function getUserDashboardOverview() {
    const response = await axiosClient.get("/users/dashboard");

    const { success, message, data } = response.data;

    if (!success) {
      result = {
        success: false,
        message,
      };

      return result;
    }

    result = {
      success: true,
      data,
      message,
    };

    return result;
  }

  return {
    getUpcomingEvents,
    getFeaturedEvents,
    getCurrentBlogs,
    getTheaterSectionData,
    getSingleEvent,
    saveContactInfo,
    getAdminOrganizersOverview,
    getUserDashboardOverview,
  };
};

export default useServerSideQueries;
