export const singup = async (reg, res) => {
  try {
    const { fullName, username, email, password } = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }
  } catch (error) {}
};

export const login = async (reg, res) => {
  res.json({
    data: "You hit the login page",
  });
};

export const logout = async (reg, res) => {
  res.json({
    data: "You hit the logout page",
  });
};
