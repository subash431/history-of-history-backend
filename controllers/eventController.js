const Event = require("../models/Event");

// Get all events
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a new event
exports.addEvent = async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    const savedEvent = await newEvent.save();
    res.json(savedEvent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get event by ID
exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update event by ID
exports.updateEvent = async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedEvent) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.json(updatedEvent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete event by ID
exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.json({ message: "Event deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a like to the event
exports.addLike = async (req, res) => {
  try {
    const { eventId } = req.params;
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    event.likes += 1; // Increment like count
    await event.save();

    res.status(200).json({ message: "Like added", likes: event.likes });
  } catch (error) {
    res.status(500).json({ message: "Error adding like", error });
  }
};

// Remove a like from the event
exports.removeLike = async (req, res) => {
  try {
    const { eventId } = req.params;
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    if (event.likes > 0) {
      event.likes -= 1; // Decrease like count
      await event.save();
      res.status(200).json({ message: "Like removed", likes: event.likes });
    } else {
      res.status(400).json({ message: "No likes to remove" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error removing like", error });
  }
};

// Add a comment to an event
exports.addComment = async (req, res) => {
  const { text } = req.body; // The comment text
  try {
    const event = await Event.findById(req.params.eventId);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    // Push the new comment to the comments array
    event.comments.push({ text });
    await event.save();

    res.status(200).json(event); // Return updated event with comments
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
