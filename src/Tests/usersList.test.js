import {
  render,
  screen,
  waitForElementToBeRemoved,
  waitFor,
} from "@testing-library/react";
import UserList from "../Components/usersList";
import usersRepository from "../Services/usersRepository";
import { generateUsers } from "./Factories/users";

jest.mock("../Services/usersRepository");

describe("userList component", () => {
  it("shows a loading message before fetch", async () => {
    usersRepository.fetchUsers.mockResolvedValueOnce([]);
    render(<UserList />);

    expect(screen.getByText(/loading users/i)).toBeInTheDocument();

    await waitFor(() => screen.getByRole("alert"));
  });

  it("hides loading message after fetch", async () => {
    usersRepository.fetchUsers.mockResolvedValueOnce([]);
    render(<UserList />);

    await waitForElementToBeRemoved(() => screen.getByText(/loading users/i));

    expect(screen.queryByText(/loading users/i)).not.toBeInTheDocument();
  });

  it("shows an error message if the fetch to the API fails", async () => {
    usersRepository.fetchUsers.mockResolvedValueOnce({ error: 500 });
    render(<UserList />);

    await waitFor(() => screen.getByRole("alert"));

    expect(screen.getByRole("alert")).toHaveTextContent(
      /Oops, error fetching the users/i
    );
  });

  it("shows no users found message if can't find any", async () => {
    usersRepository.fetchUsers.mockResolvedValueOnce([]);
    render(<UserList />);

    await waitFor(() => screen.getByRole("alert"));

    expect(screen.getByRole("alert")).toHaveTextContent(/No users yet/i);
  });

  it("shows a list of users", async () => {
    const users = generateUsers(1, 3);
    usersRepository.fetchUsers.mockResolvedValueOnce(users);
    render(<UserList />);

    await waitForElementToBeRemoved(() => screen.getByText(/loading users/i));

    users.forEach((user) => {
      expect(screen.getByText(user.name.first)).toBeInTheDocument();
    });
  });
});
