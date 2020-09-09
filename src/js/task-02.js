const btnRef = document.querySelector('.task-02');
btnRef.addEventListener('change', handleTask02);

function handleTask02() {
  const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
  ];

  const toggleUserState = (allUsers, userName) => {
    const updatedUsers = allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user,
    );

    return Promise.resolve(updatedUsers);
  };

  const logger = updatedUsers => console.table(updatedUsers);

  if (btnRef.checked) {
    toggleUserState(users, 'Mango').then(logger);
    toggleUserState(users, 'Lux').then(logger);
  }
}
