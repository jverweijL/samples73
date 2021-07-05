<#if Day.getSiblings()?has_content>
<div class="wrapper">
    <div class="buttonWrapper">
	<#list Day.getSiblings() as cur_Day>
		<#assign cur_Day_Data = getterUtil.getString(cur_Day.getData())>
		
		<#if validator.isNotNull(cur_Day_Data)>
			<#assign cur_Day_DateObj = dateUtil.parseDate("yyyy-MM-dd", cur_Day_Data, locale)>
			<button class="tab-button ${cur_Day?is_first?string("active","")} ${cur_Day?is_first?string("first","")} ${cur_Day?is_last?string("last","")}" data-id="A${dateUtil.getDate(cur_Day_DateObj, "ddMMMyyyy", locale)}">${dateUtil.getDate(cur_Day_DateObj, "dd MMM yyyy", locale)}</button>
			
		</#if>
	</#list>
    </div>
    <div class="contentWrapper">
    <#list Day.getSiblings() as cur_Day>
		<#assign cur_Day_Data = getterUtil.getString(cur_Day.getData())>
		
		<#if validator.isNotNull(cur_Day_Data)>
			<#assign cur_Day_DateObj = dateUtil.parseDate("yyyy-MM-dd", cur_Day_Data, locale)>
			
			<span class='content ${cur_Day?is_first?string("active","")}' id="A${dateUtil.getDate(cur_Day_DateObj, "ddMMMyyyy", locale)}" >
			    <div>${cur_Day.Description.getData()}</div>
			</span>
		</#if>
	</#list>
      </div>
</div>
</#if>   
  
<style>
    .wrapper {
        width: 590px;
        margin: auto;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0px 5px 15px rgba(0, 0, 0, .1);
    }

    .buttonWrapper {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    button {
        letter-spacing: 3px;
        border: none;
        padding: 10px;
        background-color: #bccbe9;
        color: #232c3d;
        font-size: 18px;
        cursor: pointer;
        transition: 0.5s;
    }

    button:hover {
        background-color: #d5e3ff;
    }

    button.active {
        background-color: white;
    }

    .active {
        background-color: white;
    }

    p {
        text-align: left;
        padding: 10px;
    }

    .content {
        display: none;
        padding: 10px 20px;
    }

    .content.active {
        splay: block;
    }

    .first {
        border-top-left-radius: 10px;
    }

    .last {
        border-top-right-radius: 10px;
    }
</style>
  
<script>
    const tabs = document.querySelector(".wrapper");
    const tabButton = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".content");

    tabs.onclick = e => {
    const id = e.target.dataset.id;
    if (id) {
        tabButton.forEach(btn => {
        btn.classList.remove("active");
        });
        e.target.classList.add("active");

        contents.forEach(content => {
        content.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
    }
</script>