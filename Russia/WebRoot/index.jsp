<%@ page language="java" import="java.util.*" contentType="text/html; charset=utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'index.jsp' starting page</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
	<link rel="stylesheet" type="text/css" href="css/ru.css">
	
  </head>
  
  <body>
    <div class="titl"><span>欢迎来到俄罗斯方块</span></div>
    <div class="wo">
    <span class="subt1">本地游戏区</span>
    <div class="game"></div>
    <div class="next"></div>
    <dir class="tim">
      <input type="button" class="dist" value="干扰"/>
                用 时：<span class="times"></span>
                得 分：<span class="scores"></span>
    </dir>
    </div>
    
    <div class="ta">
    <span class="subt2">对方游戏区</span>
    <div class="game-ta"></div>
    <div class="next-ta"></div>
    <dir class="tim-ta">
                用 时：<span class="times-ta"></span>
                得 分：<span class="scores-ta"></span>
    </dir>
    </div>
    
    <script type="text/javascript" src="js/squ.js"></script>
    <script type="text/javascript" src="js/game.js"></script>
    <script type="text/javascript" src="js/local.js"></script>
    <script type="text/javascript" src="js/script.js"></script>
  </body>
</html>
