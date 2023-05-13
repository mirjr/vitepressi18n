<template>
  <div id="gitalk-container"></div>
</template>
<script lang="ts" setup>
import "../gitalk.css";
import Gitalk from "gitalk";
import { onContentUpdated, useRouter } from "vitepress";

const { route, go } = useRouter();
function deleteChild() {
  const element = document.querySelector("#gitalk-container");
  let child = element?.lastElementChild;
  while (child) {
    element?.removeChild(child);
    child = element?.lastElementChild;
  }
}
onContentUpdated(() => {
  // reset gittalk element for update
  deleteChild();
  const gitalk = new Gitalk({
    clientID: "897bb1919061fde8e257",
    clientSecret: "e98ce04604b10d8438f2671f9de8f5f50d781c58",
    repo: "i18n-comments",
    owner: "mirjr",
    admin: ["mirjr"],
    id: location.pathname.substring(0, 50), // Ensure uniqueness and length less than 50
    language: "en-US",
    distractionFreeMode: true, // Facebook-like distraction free mode
  });
  gitalk.render("gitalk-container");
});
</script>
<style scoped></style>