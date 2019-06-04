package com.app;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@WebServlet("/citys")
public class CitysArray extends HttpServlet {
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		/*
		 * String[] citys = {"Vijayawada","Nallajerla","Eluru","Tadepalligudem"};
		 * response.setContentType("text/html"); PrintWriter out = response.getWriter();
		 * out.println(Arrays.toString(citys));
		 */
		ArrayList<String> list = new ArrayList<String>();
		list.add("Vijayawada");
		list.add("Nallajerla");
		list.add("Eluru");
		list.add("tadepalligudem");
		
		GsonBuilder jsonBuilder = new GsonBuilder();
		Gson gson = jsonBuilder.create();
		
		String jsonCitys = gson.toJson(list);
		
		PrintWriter out = response.getWriter();
		out.print(jsonCitys);
	}

}
