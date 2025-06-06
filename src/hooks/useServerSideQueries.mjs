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

  // Get Advertisement Banners
  async function getAdvertisementBanners() {
    const advertisements = await axiosClient.get("/events/ads");

    const { success, message, data } = advertisements.data;

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

  // Get Venues
  async function getVenues(start, limit) {
    const venues = await axiosClient.get(
      `/venues?start=${start}&limit=${limit}`
    );

    const { success, message, data } = venues.data;

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

  // Get Event Details

  // Get Featured Events
  async function getFeaturedEvents(limit) {
    const featuredEvents = await axiosClient.get(
      `/events?limit=${limit}&featured=enabled`
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

  // Check if object has non-empty keys
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
    const singleEvent = await axiosClient.get(`/events/${eventId}/client`);

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

  // Get Single Event
  async function getSingleEventAdmin(eventId) {
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
    const response = await axiosClient.get("/users/dashboard/stats");

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

  // Update event details
  async function updateEventDetails(eventId, updatedData) {
    const response = await axiosClient.patch(`/events/${eventId}`, updatedData);

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

  // Delete event
  async function deleteEvent(eventId) {
    const response = await axiosClient.delete(`/events/${eventId}`);

    const { success, message } = response.data;

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
    };

    return result;
  }

  // Update event status
  async function updateEventStatus(eventId, updateData) {
    const response = await axiosClient.put(`/events/${eventId}`, {
      updateData,
    });

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

  // Get Organizer Requests
  async function getOrganizerRequests() {
    const response = await axiosClient.post("/users/organizer_requests");

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

  // Review Organizer
  async function reviewOrganizer(userId, requestData) {
    const response = await axiosClient.patch(
      `/users/organizer_requests/${userId}`,
      requestData
    );

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

  // Get system Categories
  async function getSystemCategories() {
    const response = await axiosClient.get("/categories");

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

  // Delete system category
  async function deleteSystemCategory(categoryId) {
    const response = await axiosClient.delete(`/categories/${categoryId}`);

    const { success, message } = response.data;

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
    };

    return result;
  }

  // Get user profile details
  async function getUserProfileDetails() {
    const response = await axiosClient.get("/users/profile");

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

  // Create wishlist for event
  async function createWishlist(eventId) {
    const response = await axiosClient.post("/wishlist", { event: eventId });

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

  // Get user wishlist
  async function getUserWishlist() {
    const response = await axiosClient.get("/wishlist");

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

  // Delete a single wishlist item
  async function deleteWishlistItem(wishlistId) {
    const response = await axiosClient.delete(`/wishlist/${wishlistId}`);

    const { success, message } = response.data;

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
    };

    return result;
  }

  // Update user password
  async function updateUserPassword(requestData) {
    const response = await axiosClient.put("/users/my_password", requestData);

    const { success, message } = response.data;

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
    };

    return result;
  }

  // Add Event to wishlist
  async function addEventToWishlist(eventId) {
    const response = await axiosClient.post("/wishlist", { event: eventId });

    const { success, message } = response.data;

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
    };

    return result;
  }

  // Get users tickets
  async function getUserTickets(length, start) {
    const response = await axiosClient.get(
      `/users/tickets/fetch?length=${length}&start=${start}`
    );

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

  // Update Section Seat
  async function updateSectionSeat(sectionId, seatsData) {
    const response = await axiosClient.patch(
      `/seatmap/${sectionId}/seats`,
      seatsData
    );

    const { success, message } = response.data;

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
    };

    return result;
  }

  // Get site events
  async function getSiteEvents(
    start,
    limit,
    past = null,
    location = null,
    date = null,
    paid = null,
    featured = null
  ) {
    const response = await axiosClient.get(
      `/events?start=${start}&limit=${limit}&location=${location}&date=${date}&paid=${paid}&featured=${featured}&past=${past}`
    );

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

  // Get Artists
  async function getArtists() {
    const response = await axiosClient.get("/artists");

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

  // Get Venues
  async function getVenues(start, limit) {
    const response = await axiosClient.get(
      `/venues?start=${start}&limit=${limit}`
    );

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

  // Get single venue details
  async function getSingleVenue(venueId) {
    const response = await axiosClient.get(`/venues/${venueId}`);

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

  // Get client blogs
  async function getClientBlogs(start, limit) {
    const response = await axiosClient.get(
      `/blogs?start=${start}&limit=${limit}`
    );

    const { success, message, data } = response.data;

    if (!success) {
      result = {
        success,
        message,
      };

      return result;
    }

    result = {
      success,
      data,
      message,
    };

    return result;
  }

  // Get Single Blog
  async function getSingleBlog(blogId) {
    const response = await axiosClient.get(`/blogs/${blogId}`);

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

  // Search artist and events
  async function searchArtistAndEvents(searchTerm) {
    const response = await axiosClient.post(`/search`, searchTerm);

    const { success, message, data } = response.data;

    if (!success) {
      result = {
        success: false,
        message,
      };

      return result;
    }

    return {
      success: true,
      data,
      message,
    };
  }

  // Update Single Category
  async function updateSingleCategory(categoryId, updatedData) {
    const response = await axiosClient.patch(
      `/categories/${categoryId}`,
      updatedData
    );

    const { success, message, data } = response.data;

    if (!success) {
      result = {
        success,
        message,
      };

      return result;
    }

    return {
      success,
      data,
      message,
    };
  }

  // Delete a single venue
  async function deleteSingleVenue(venueId) {
    const response = await axiosClient.delete(`/venues/${venueId}`);

    const { success, message } = response.data;

    if (!success) {
      result = {
        success,
        message,
      };

      return result;
    }

    return {
      success,
      message,
    };
  }

  // Update single blog
  async function updateSingleBlog(blogId, updatedData) {
    const response = await axiosClient.patch(`/blogs/${blogId}`, updatedData);

    const { success, message } = response.data;

    if (!success) {
      result = {
        success,
        message,
      };

      return result;
    }

    return {
      success,
      message,
    };
  }

  // Delete artist
  async function deleteArtist(artistId) {
    const response = await axiosClient.delete(`/artists/${artistId}`);

    const { success, message } = response.data;

    if (!success) {
      result = {
        success,
        message,
      };

      return result;
    }

    return {
      success,
      message,
    };
  }

  // Get Single Artist
  async function getSingleArtist(artistId) {
    const response = await axiosClient.get(`/artists/${artistId}`);

    const { success, message, data } = response.data;

    if (!success) {
      result = {
        success,
        message,
      };

      return result;
    }

    return {
      success,
      data,
      message,
    };
  }

  // Update Single Artist
  async function updateSingleArtist(artistId, updatedData) {
    const response = await axiosClient.patch(
      `/artists/${artistId}`,
      updatedData
    );

    const { success, message } = response.data;

    if (!success) {
      result = {
        success,
        message,
      };

      return result;
    }

    return {
      success,
      message,
    };
  }

  // Download Attendance
  async function downloadAttendance(params) {
    const response = await axiosClient.get(
      `/events/${params.id}/${params.event_show_id}/${params.show_time_id}/download_attendees`
    );

    const { success, message, data } = response.data;

    if (!success) {
      result = {
        success,
        message,
      };

      return result;
    }

    return {
      success,
      message,
      data,
    };
  }

  // Get profile information
  async function getUserProfile() {
    const response = await axiosClient.get("/users/my_profile");

    const { success, message, data } = response.data;

    if (!success) {
      result = {
        success,
        message,
      };

      return result;
    }

    return {
      success,
      data,
      message,
    };
  }

  // Update user profile
  async function updateUserProfile(updatedData) {
    const response = await axiosClient.patch(`/users/my_profile`, updatedData);

    const { success, message } = response.data;

    if (!success) {
      result = {
        success,
        message,
      };

      return result;
    }

    return {
      success,
      message,
    };
  }

  // User become organizer
  async function userBecomeOrganizer(requestData) {
    const response = await axiosClient.post(
      "/users/become_organizer",
      requestData
    );

    const { success, message } = response.data;

    if (!success) {
      result = {
        success,
        message,
      };

      return result;
    }

    return {
      success,
      message,
    };
  }

  // Delete seatmap section
  async function deleteSeatMapSection(sectionId) {
    const response = await axiosClient.delete(`/seatmap/${sectionId}`);

    const { success, message } = response.data;

    if (!success) {
      result = {
        success,
        message,
      };

      return result;
    }

    return {
      success,
      message,
    };
  }

  // Delete Single Blog
  async function deleteSingleBlog(blogId) {
    const response = await axiosClient.delete(`/blogs/${blogId}`);

    const { success, message } = response.data;

    if (!success) {
      result = {
        success,
        message,
      };

      return result;
    }

    return {
      success,
      message,
    };
  }

  // Update blog status
  async function updateBlogStatus(blogId) {
    const response = await axiosClient.patch(`/blogs/${blogId}/change_status`);

    const { success, message } = response.data;

    if (!success) {
      result = {
        success,
        message,
      };

      return result;
    }

    return {
      success,
      message,
    };
  }

  // Delete team member
  async function deleteTeamMember(teamMemberId) {
    const response = await axiosClient.delete(`/team/${teamMemberId}`);
    const { success, message } = response.data;
    if (!success) {
      result = {
        success,
        message,
      };
      return result;
    }
    return {
      success,
      message,
    };
  }

  // Update team member
  async function updateTeamMember(teamMemberId, updatedData) {
    const response = await axiosClient.patch(
      `/team/${teamMemberId}`,
      updatedData
    );
    const { success, message } = response.data;
    if (!success) {
      result = {
        success,
        message,
      };
      return result;
    }
    return {
      success,
      message,
    };
  }

  // Get single Team Member
  async function getSingleTeamMember(teamMemberId) {
    const response = await axiosClient.get(`/team/${teamMemberId}`);
    const { success, message, data } = response.data;
    if (!success) {
      result = {
        success,
        message,
      };
      return result;
    }
    return {
      success,
      data,
      message,
    };
  }

  // Create New Team Member
  async function createNewTeamMember(requestData) {
    const response = await axiosClient.post("/team", requestData);
    const { success, message } = response.data;
    if (!success) {
      result = {
        success,
        message,
      };
      return result;
    }
    return {
      success,
      message,
    };
  }

  // Get Team Members
  async function getTeamMembers() {
    const response = await axiosClient.get("/team");
    const { success, message, data } = response.data;
    if (!success) {
      result = {
        success,
        message,
      };
      return result;
    }
    return {
      success,
      data,
      message,
    };
  }

  // Get Blogs Stats
  async function getBlogsStats() {
    const response = await axiosClient.get("/blogs/show/stats");
    const { success, message, data } = response.data;
    if (!success) {
      result = {
        success,
        message,
      };
      return result;
    }
    return {
      success,
      data,
      message,
    };
  }

  // Update Single Venue
  async function updateSingleVenue(venueId, updatedData) {
    const response = await axiosClient.patch(`/venues/${venueId}`, updatedData);
    const { success, message } = response.data;
    if (!success) {
      result = {
        success,
        message,
      };
      return result;
    }
    return {
      success,
      message,
    };
  }

  // Update Featured Event
  async function updateFeaturedEvent(eventId, updatedData) {
    const response = await axiosClient.patch(
      `/events/${eventId}/update_featured`,
      updatedData
    );
    const { success, message } = response.data;
    if (!success) {
      result = {
        success,
        message,
      };
      return result;
    }
    return {
      success,
      message,
    };
  }

  // Add Event as advertisement
  async function addEventAsAdvertisement(eventId, updatedData) {
    const response = await axiosClient.patch(
      `/events/${eventId}/add_as_advertisement`,
      updatedData
    );
    const { success, message } = response.data;
    if (!success) {
      result = {
        success,
        message,
      };
      return result;
    }
    return {
      success,
      message,
    };
  }

  return {
    getVenues,
    updateFeaturedEvent,
    addEventAsAdvertisement,
    getSingleEventAdmin,
    getAdvertisementBanners,
    getArtists,
    getSiteEvents,
    createWishlist,
    deleteEvent,
    deleteArtist,
    getBlogsStats,
    getTeamMembers,
    getSingleBlog,
    getUserProfile,
    getClientBlogs,
    getSingleVenue,
    getUserTickets,
    getSingleEvent,
    getUserWishlist,
    reviewOrganizer,
    getCurrentBlogs,
    deleteTeamMember,
    saveContactInfo,
    getSingleArtist,
    updateTeamMember,
    deleteSingleBlog,
    updateBlogStatus,
    updateSingleVenue,
    updateUserProfile,
    updateSingleBlog,
    deleteSingleVenue,
    updateSectionSeat,
    updateEventStatus,
    downloadAttendance,
    getUpcomingEvents,
    updateSingleArtist,
    addEventToWishlist,
    getFeaturedEvents,
    updateUserPassword,
    deleteWishlistItem,
    updateEventDetails,
    createNewTeamMember,
    getSingleTeamMember,
    userBecomeOrganizer,
    deleteSeatMapSection,
    updateSingleCategory,
    deleteSystemCategory,
    getOrganizerRequests,
    searchArtistAndEvents,
    getUserProfileDetails,
    getTheaterSectionData,
    getUserDashboardOverview,
    getAdminOrganizersOverview,
  };
};

export default useServerSideQueries;
