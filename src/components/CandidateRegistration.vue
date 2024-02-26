<template>
  <div class="formCont">
    <form>
      <label for="name">Name</label>
      <input type="text" placeholder="name" required>
      <label for="adm no.">Admission number:</label>
      <input type="text" placeholder="admission number" :maxlength="14" required>
      <label for="year">Year:</label>
      <select required>
        <option value="Year 1">Year 1</option>
        <option value="Year 2">Year 2</option>
        <option value="Year 3">Year 3</option>
        <option value="Year 4">Year 4</option>
      </select>
      <label for="school">School:</label>
      <select required>
        <option value="SOE">SOE</option>
        <option value="SASSB">SASSB</option>
        <option value="SSAES">SSAES</option>
        <option value="INFOCOMS">INFOCOMS</option>
      </select>

      <label for="position">Position:</label>
      <select required>
        <option value="Campus Representative">Campus Representative</option>
        <option value="General Representative">General Representative</option>
        <option value="Academic Representative">Academic Representative</option>
        <option value="Ladies' Representative">Ladies' Representative</option>
      </select>

      <button type="submit" class="btn">Register</button>
    </form>
  </div>
</template>

<style scoped>
.formCont{
  margin: 6vh 25vw;
  background-color: #eee;
  padding: 20px 20px;
  border-radius: 15px;
}
form{
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 50vw;
  text-align: left;
}

form input, form select {
  border-radius: 8px;
  padding: 4px 8px;
  font-size: 16px;
  height: 36px;
}
</style>