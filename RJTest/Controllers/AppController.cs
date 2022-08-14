using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RJTest.Modals;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace RJTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppController : ControllerBase
    {
        private static string connectionstr = @"Data Source=DESKTOP-FA0M6BT\SQLEXPRESS;Initial Catalog=Biit;Integrated Security=True";
        private static string loginId = "";
        private static string userRole = "";
        private static string loginToken = "";

        //////// User Login ////////
        [HttpPost("login")]
        public user_entity login(user_entity obj)
        {
            user_entity response = new user_entity();
            try
            {
                SqlConnection con = new SqlConnection(connectionstr);
                string query = "select * from tbl_Login where userName = '" + obj.userName + "' and userPass = '" + obj.userPass + "'";
                con.Open();
                SqlCommand com = new SqlCommand(query, con);
                SqlDataReader sdr = com.ExecuteReader();
                Random rnd = new Random();
                while (sdr.Read())
                {
                    response.userName = sdr["userName"].ToString();
                    loginId = response.userName;
                    response.userRole = sdr["userRole"].ToString();
                    userRole = response.userRole;
                    loginToken = rnd.Next().ToString();
                    response.userRole.Trim();
                }
                con.Close();
                return response;
            }
            catch (Exception ex)
            {
                Console.Write(ex);
                return response;
                throw;
            }
        }

        [HttpPost("addlab")]
        public bool addlab(lab_entity obj)
        {
            try
            {
                SqlConnection con = new SqlConnection(connectionstr);
                string query = "insert into tbl_labs values('" + obj.labName + "','" + obj.labType + "','" + DateTime.Now + "')";
                con.Open();
                SqlCommand com = new SqlCommand(query, con);
                com.ExecuteNonQuery();
                con.Close();
                return true;
            }
            catch (Exception ex)
            {
                return false;
                throw;
            }
        }

        [HttpGet("getLabs")]
        public List<lab_entity> getLabs()
        {
            List<lab_entity> list = new List<lab_entity>();
            try
            {
                lab_entity obj;
                SqlConnection con = new SqlConnection(connectionstr);
                con.Open();
                string query = "select * from tbl_Location";
                SqlCommand com = new SqlCommand(query, con);
                SqlDataReader sdr = com.ExecuteReader();
                while (sdr.Read())
                {
                    obj = new lab_entity();
                    obj.labId = sdr["id"].ToString();
                    obj.labName = sdr["labName"].ToString();
                    obj.labType = sdr["labType"].ToString();
                    obj.addedOn = sdr["addedOn"].ToString();
                    list.Add(obj);
                }
                con.Close();
                return list;
            }
            catch (Exception ex)
            {
                return list;
                throw;
            }
        }

        [HttpPost("deleteLab")]
        public bool deleteLab(lab_entity obj)
        {
            try
            {
                SqlConnection con = new SqlConnection(connectionstr);
                con.Open();
                string query = "delete from tbl_Location where id='" + obj.labId + "'";
                SqlCommand com = new SqlCommand(query, con);
                com.ExecuteNonQuery();
                con.Close();
                return true;
            }
            catch (Exception ex)
            {
                return false;
                throw;
            }
        }

        [HttpPost("addProduct")]
        public bool addProduct(product_entity obj)
        {
            try
            {
                SqlConnection con = new SqlConnection(connectionstr);
                string query = "insert into tbl_products values('" + obj.Name + "','" + obj.Company + "','" + obj.Quantity + "','" + DateTime.Now + "','" + obj.Desc + "','Active')";
                con.Open();
                SqlCommand com = new SqlCommand(query, con);
                com.ExecuteNonQuery();
                con.Close();
                return true;
            }
            catch (Exception ex)
            {
                return false;
                throw;
            }
        }
        [HttpGet("getProducts")]
        public List<product_entity> getProducts()
        {
            List<product_entity> list = new List<product_entity>();
            try
            {
                product_entity obj;
                SqlConnection con = new SqlConnection(connectionstr);
                con.Open();
                string query = "select * from tbl_products";
                SqlCommand com = new SqlCommand(query, con);
                SqlDataReader sdr = com.ExecuteReader();
                while (sdr.Read())
                {
                    obj = new product_entity();
                    obj.id = sdr["id"].ToString();
                    obj.Name = sdr["Name"].ToString();
                    obj.Company = sdr["Company"].ToString();
                    obj.Quantity = sdr["Quantity"].ToString();
                    obj.AddedOn = sdr["Date"].ToString();
                    obj.Desc = sdr["Description"].ToString();
                    obj.status = sdr["Status"].ToString();
                    if (obj.status == "In Use")
                    {
                        obj.icon = "fa fa-fw fa-linode";
                        obj.color = "greenyellow";
                    }
                    else if(obj.status == "Damaged")
                    {
                        obj.icon = "fa fa-fw fa-chain-broken";
                        obj.color = "red";
                    }
                    else if(obj.status == "In Stock")
                    {
                        obj.icon = "fa fa-fw fa-cubes";
                        obj.color = "yellow";
                    }
                    list.Add(obj);
                }
                con.Close();
                return list;
            }
            catch (Exception ex)
            {
                return list;
                throw;
            }
        }
        [HttpPost("deleteProduct")]
        public bool deleteProduct(product_entity obj)
        {
            try
            {
                SqlConnection con = new SqlConnection(connectionstr);
                con.Open();
                string query = "delete from tbl_products where id='" + obj.id + "'";
                SqlCommand com = new SqlCommand(query, con);
                com.ExecuteNonQuery();
                con.Close();
                return true;
            }
            catch (Exception ex)
            {
                return false;
                throw;
            }
        }
        [HttpGet("getUsers")]
        public List<user_entity> getUsers()
        {
            List<user_entity> list = new List<user_entity>();
            try
            {
                user_entity obj;
                SqlConnection con = new SqlConnection(connectionstr);
                con.Open();
                string query = "select * from tbl_Users";
                SqlCommand com = new SqlCommand(query, con);
                SqlDataReader sdr = com.ExecuteReader();
                while (sdr.Read())
                {
                    obj = new user_entity();
                    obj.id = sdr["id"].ToString();
                    obj.userName = sdr["Name"].ToString();
                    obj.userEmail= sdr["Email"].ToString();
                    obj.userRole = sdr["Role"].ToString();
                    obj.date = sdr["Date"].ToString();
                    obj.location = sdr["Location"].ToString();
                    list.Add(obj);
                }
                con.Close();
                return list;
            }
            catch (Exception ex)
            {
                return list;
                throw;
            }
        }
        [HttpPost("addUser")]
        public bool addUser(user_entity obj)
        {
            try
            {
                SqlConnection con = new SqlConnection(connectionstr);
                string query = "insert into tbl_Users values('" + obj.userName + "','" + obj.userEmail+ "','"+obj.userRole+"','"+obj.location+"','" + DateTime.Now + "')";
                con.Open();
                SqlCommand com = new SqlCommand(query, con);
                com.ExecuteNonQuery();
                con.Close();
                return true;
            }
            catch (Exception ex)
            {
                return false;
                throw;
            }
        }
        [HttpPost("deleteUser")]
        public bool deleteUser(user_entity obj) {
            try
            {
                SqlConnection con = new SqlConnection(connectionstr);
                string query = "delete from tbl_Users where id = '"+obj.id+"'";
                con.Open();
                SqlCommand com = new SqlCommand(query, con);
                com.ExecuteNonQuery();
                con.Close();
                return true;
            }
            catch (Exception ex)
            {
                return false;
                throw;
            }
        }
    }
}
