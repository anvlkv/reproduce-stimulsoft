import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public r = `<?xml version="1.0" encoding="utf-8" standalone="yes"?>
  <StiSerializer version="1.02" type="Net" application="StiReport">
    <Culture>en-US</Culture>
    <Dictionary Ref="1" type="Dictionary" isKey="true">
      <BusinessObjects isList="true" count="0" />
      <Databases isList="true" count="1">
        <Christmas Ref="2" type="Stimulsoft.Report.Dictionary.StiExcelDatabase" isKey="true">
          <Alias>Christmas</Alias>
          <Key />
          <Name>Christmas</Name>
          <PathData>resource://Christmas</PathData>
        </Christmas>
      </Databases>
      <DataSources isList="true" count="2">
        <Charts Ref="3" type="DataTableSource" isKey="true">
          <Alias>Charts</Alias>
          <Columns isList="true" count="10">
            <value>Year,System.Double</value>
            <value>Family,System.Double</value>
            <value>Alone,System.Double</value>
            <value>At_x0020_Work,System.Double</value>
            <value>Home,System.Double</value>
            <value>By_x0020_Car,System.Double</value>
            <value>By_x0020_Air,System.Double</value>
            <value>Xmas_x0020_eve,System.Double</value>
            <value>E-commerce,System.Double</value>
            <value>Beforehand,System.Double</value>
          </Columns>
          <Dictionary isRef="1" />
          <Name>Charts</Name>
          <NameInSource>Christmas.Charts</NameInSource>
        </Charts>
        <List Ref="4" type="DataTableSource" isKey="true">
          <Alias>List</Alias>
          <Columns isList="true" count="6">
            <value>Amount,System.Double</value>
            <value>Growth_x0020_-_x0020_Loss,System.Double</value>
            <value>Increase_x0020_over_x0020_a_x0020_Decade,System.Double</value>
            <value>Name,System.String</value>
            <value>Target_x0020_Amount,System.Double</value>
            <value>Year,System.Double</value>
          </Columns>
          <Dictionary isRef="1" />
          <Name>List</Name>
          <NameInSource>Christmas.List</NameInSource>
        </List>
      </DataSources>
      <Relations isList="true" count="1">
        <Years Ref="5" type="DataRelation" isKey="true">
          <Active>True</Active>
          <Alias>Years</Alias>
          <ChildColumns isList="true" count="1">
            <value>Year</value>
          </ChildColumns>
          <ChildSource isRef="4" />
          <Dictionary isRef="1" />
          <Key>2b4562885ce74989b98a5f7e86ff3e57</Key>
          <Name>Years</Name>
          <NameInSource>Relation</NameInSource>
          <ParentColumns isList="true" count="1">
            <value>Year</value>
          </ParentColumns>
          <ParentSource isRef="3" />
        </Years>
      </Relations>
      <Report isRef="0" />
      <Resources isList="true" count="1">
        <value>Name=Christmas, Alias=Christmas, Type=Excel, Content=SXC7Xb20fZ60fE8oXV9xq8ZH78PVeGWjWi6aHOcfeIQ6WsJ5pKwSDh08T4tRMVaIeTLk5HDjHVAjS_x002B_dQZIZbiD6B6j9N7XFVEK6TfAXQBQJ18Jae1G26WhTbj8ZwF8c7wEi18XVC9g8R_x002B_fEoXSTx5byevdi77DUHx6Lf8ln9_x002F_iECinL98h4mnj7JduEHYvFvVjY_x002B_hDQON3ZbrbigJ5gEJJjB6d27lq0tLkqd84x_x002B_3vBqg9PHKorLKNw4pCZBG_x002F_eKuIE94E_x002F_i0mrWGzHvJr7_x002F_qS9UKC1tJXyvicW2GW7Gvek_x002B_I6bxY18pV9jY9nGlOVpA9i4Wca5vFb77_x002B_YNTG48jBYqe9IeNQtdRZFk8DgOrejbUCeFunefXoGxXl2YTsWM7htWy38bvWO7oUvEUb5JcD4qkZEUPfsvBXAAnHvkJQbrta06TbuP6ZK9wsUxqdQktaNKWrwyoogtFuHH9PXMWfvOQoywUttaRQWS56S0IOyqp_x002B_FnrI1Z9MlOD_x002F_9b3rC_x002B_Q27m1b9lPmOi8_x002B_I4BA8eycoSd_x002B_3sfyJrTUKgF89vjv8ij5nTNrmkJ8ofr9SE_x002F_l_x002B_stWgsKYN_x002B_Poc9dkTgez9wmRYrHx24rob7uSMXrHMH9_x002B_eSIF6lGGWzmhAoaHJ1Evk95wj5XbOurO94LNuiNBFcKaf6k1oKCONi15CufO3kCP6kkTB681NpnikxE0GVUwb5CBC7PFH1rOn6heJTPRfQFT75aX1X3o3IjutPcaQLy9mimVimNtuzd1TC_x002F_qhnJCtd9Gvwn3zTEzONKdFxGIcDu4mEZmTt3Qkmfujf4uCljtTXIWxc6YOK6TjnwRzi67I3ErX97AdSSalE8qvFkShMGQCMKIVdtAOH3sSlJHJlAfAZYsiZq4ytXgMTv5RzHSu9vGHZSPRGjepn477Ia7p_x002B_vBEXMTzsn_x002B_yCQTXCVmK2kL8Xx0WlCUV_x002F_ENvU8sz9H0ysXhjXOnEgBvP8H39MsJZ07pwwkITb8TDFhq5EvTfvjMQg_x002B_ue1CgTIKLj3zzw6aEIRHdq_x002B_RqaOeQg3k5_x002F_8R7nmt_x002B_o3JFM11M22FJY_x002F_63zddc7e29RnL8_x002F_4T3RQQclxKYcV_x002B_jUBclMxr2zr8qSgWJ_x002F_qRVTF6beyamIt6g7EilvR9_x002B_wmHG_x002F_CUb4GsCg6Y53Cs_x002B_v0ejJpS4OiilbkHzcnk1kx_x002B__x002B_xRBsvOVdv0_x002F_6rZpb1TL35k4KIS6JseupWjwxTkA8JfccRdZm1yHuwbcygzfkHM_x002B_Mxjh243ydxeeQLVUbDw4KhlDh6ebGDHxH3sWhsP0tRukyccy2rQugNfGrTfC3BRLAg53yoN_x002B_HkirE74OXzRHYGcoHVBrRcUXSIUFCUNRh8GRrdLCZF5m8Sd2VPbDoXARf_x002B_CkXlwNOxc8X5QaJ9vINGPMEXtfCxBtDhsCJqNAt_x002B_w8iSKYlp2lFo_x002F_ZzktPuj7k_x002B_3X4CuZzuZuXcTfeD7pifHE9n9Ctu1JHBkFXsiBou5mNCmjGMAAIPrmjwBH9W20X_x002F_imIMltuX4hxnrjFQXQVO6g1NYgCNCTLQU1Ozurb1DKjFW6gRceG9D8WbTNtc2WfSw6Rhzfm2WBskiVodeOhzGzm0eNdo_x002B_FCBruGbecNjO6vcl_x002F_wlFo9PDzCamtV_x002B_Bf4aXXfjixMILzVRn8yYuYSzMRjFCO1DdRb5pB6x6DfDfrMxWEp3bhbxwXxH6yJ6nka2_x002F_M0Aes2JlNxbME6c1Nt6qwXOpKMC_x002B_2pxJzmARNY8uYP9Es_x002B_ndv0PAK4uFbFBBBc4LzF4_x002F_5raTrgMPt0iODJ9DCSO2JNHaTDVTcHh_x002B_CQaliVxsnlQX0_x002F_XRvi8bSAndMv412ujur9cIGkWUWaoq2MHQ0_x002B_fHQH1w3Y18ikoGiG6bO9xMjSJwNtD4W98xqFaPW6bYLnJNO9fQMFDaQSc_x002B_uNgfMLhzCjnxc_x002B_rU5EoOAIQulxx4QJj1cG9MvRuCHq2AdLe_x002F_osJsG5NxWXDBA1USoEoxMuIGytIBo6_x002B_mtgYhBtX0kmmvBeTmqDe5PsBKQFjmHCIWVd5SZJI9qpx4aRudhYldY_x002B_CuT_x002F_dORCpQ9vuC1GPWY_x002B_UXbRX5hUXck7cmcEqiygEkDR107VBeLk7DAQfAF4SXakfZdKvLC0V5HhqRRAm2eUxKg1Kw4_x002F_NgJG2dShvqrsemx5PVmcp_x002F_yXdD5UD_x002F_6JSrbdNaWQcQL2B16NSknBtWzX_x002F_hsmpEipgiQgTHez_x002B_kcRA3KOuDPJRVoMv_x002F_LL6f79m1ujYkiQrKEzmYr7XacroHsIUESjf7m3vTQIgsZQ4h_x002B_w2ivlEb_x002B_MdDyv2vPB_x002F_gPjq_x002B_v8YL7VhpeELer0zWp45e5ZZojyxz3CN6kNnzh323od_x002F_3TgN9cJSavSk4JjPER3FDbTxVqxhd6aQyImEXrvptZWwGMm_x002B_WudwTBEK21xM89Hh0Zmvf42KzIAPaAALM3aOsbsUU1dqhG1lxClGV_x002B_d5qhNw7szxbngeD_x002B_LdtzN1ID3DhAa5FxilRD0lFyNr_x002B_4_x002F_EF4GcKLU2cdFsdgIlP4dbpCpbdE2V_x002F_SF5K_x002F_FfEqoBNs5jgzMzg_x002F_IsGD3rByGnmbSXcTQfNJrvc82_x002F_AuQ_x002F_GGOa670eLYfAJKI60Q_x002B_imKnVKnO357kzqvLn4yBcZLOdbJ4XASGBLu799Zew_x002F_snP0EflungWsW5V7vZ_x002B_m2kaV6oJvZL7MB0y14CVkaP8lofyO_x002F_urFNuyJRXCBtVXwgL42GYJoh9JlUXedrHNoTpa_x002F_xo_x002B_BjcaWfyaPD4fo6d5LrGueMN2uVOhjhs_x002B_tcc2dJAwuwm6n1HsaOBUM9ZMOdcmD1tpRZS6GWyKr_x002B_Fc2SQyS8OarRmAw6Ml6cxGNUOOmjzODyTzVnw9DoeuCK_x002F_QDv9c51ZrKjmNFbudAVaJv48mglQewRMzkDzVD9Ufbaj6E3fULN_x002B_AB9Zks3pLfmT5ejUf3JmdNR1n26UCwMQvzM7REREawJ3wTZpbIletdLTWk5lt9OCE6XwXRXIY2I6FR3gF3trDebwnW1GMntR7JRcVkExikA2T4yhearQxAmjzEkqWAxXIPZ3U30mkiqp6zBHlsxdJ_x002B_IN0xrNn8K_x002B_jKGNf4dR2ZaotBYWBAp_x002B_3KP_x002F_xUCXP7pIcaX9wYKu_x002F_7wCUoNQQVTnFDf7jZTuBFgOPcpNfKGQ4wGDT76hZ0ijvtMGE_x002F_bXqkqvgJN2vejjO0T9I0zJXSat8IvJ_x002B_Eg9WNjVS3qTh_x002F_TW4DzKHUnRmuikbA09XmyP0i1dDwKC0LhgerJKgv71_x002F_5Cpt6Fqtt2SmtRPxXbRSjpmlyzyVGVwiZmzxSSTHwC1uD3_x002B_9ikWVlgaOD_x002F_IE7gsmQjNtzXFkw8SjmhlE_x002B_1OJGbh1MpCLXLXOnjebfqbsbAewN7VHsvnA4qQKbJbs9A_x002F_g6L_x002F_dUh5N3JLuBokJkgNQEzX3Euy4wjZQYq_x002B_2eTX3gOc8_x002B_EUz33uBOLjXZngYsE2Kvj3WcEHOLH8YJfSJ_x002B_RLRo48DV9rOLfRVyrkZnSV202jKPCF_x002F_DifjERTva2TH78lPJ7eCnNCEd4NukObES9JuwrT3nYMCWcQO9P_x002B_w5qImwzlXdfiP_x002B_svmJRYqilhNLI8B61azqE1khK5s3U7VdU9tGjVGHYLKnytTEgxQuo9czm9Dk2esZo5BH_x002B_ZUFymzO_x002F_zv5oXwrKN_x002B_wqpXyNudXk_x002F_3y3fTJpWvNrYpXymWQzmL2vk_x002F_w5jj7vB4NOxkA66e1pGT88Z0TfwmFvhquAWfyrrDioiz7C3V9ZW9c0CgVg_x002F_ljiO4fr58mCi0Tu28L8Y8enjUXJa9BplpSvyM21vir_x002B_lEAVSzbyL5PFppPelbrQKMbODO3NuLnmRtv7yLp0knuAKUButXauRptNerqhzu20Omml_x002B_fXgieLwkNvy_x002B_JmUUjOPiZPkFY7lvOw4jcLLkLIkn_x002B_UTatJQ9OnZ5rMmGnOuq_x002F_mbJwVL0LTkm_x002F_B910qITynfTcFPKElPP2fK87oZAh_x002F_s0HezpIix_x002F_O3sN5hHnd55Hovj3Vxv97GfcZypUPeWEYX4ti_x002F_woIytNtj4roBx1eAPH8Si59HdRnBXxjc8EAvs5bv4hxpVJ8pNE5_x002B_MTcAJyF3K_x002B_rV6mt0rAsvYE2w7sLnTwBiElyQeQ5eV7JLwa8V8_x002B_tZ4BdB8BLDm2fQhSz7j4ipCyzVZcvne_x002F_hL9SHeWtR8_x002B_zGqG8G2xq8BQkQIQdxgCa8UuoaZ_x002B_x5MJ7CaA6FcRZI0jolIMOZtfIuCKiBMSyQz8ngEK1jXGJKysBPUFPQw2ObUevTXbp3ZKMqBSvjBXFy1c0sdcOSSs2AeovjFA4_x002B_LZIqkReEImdw7pHd0CEMjovxbR9_x002F_3q0deibdge30WSvnWyNkdix4P0XQ7e1YLZTT5j6JVP1y8hCzmL7xS_x002B_2ke2skph7U322LdTIkxK1gMiNoISu2Q_x002B_lvHU26nPdIsHrdQ2UEGLLH6YSxmo4qo6dtw7IGyuPRWH4B3XclFtUrG_x002F_k5A7QHH3NwTlUXAWFuwYZhwu2_x002F_lL4JmDDGzf_x002B_b8cVF6Gtg1iYhtrzqN6VVI52Pts3dVdoKAzJ4zONGEp2Kh_x002B_kSia2TFNDp7dflqiULh6hQk4EQsznt13Ms1sy3OsYiJUF8gLSQDpmxImK72BCopdo02Z_x002F_QO6r8PEyq0xS4vh4bl8RtS7Afl4loaMpIxeC_x002B_WhtPERzytNTiOL_x002F_7_x002B_fBcabx7T6XYzDiMdsa_x002B_nViuvDHUmdU374Ad5LYOBioOBTpBYMp1R7vRn5zr41SOY6wc6LgTJ7h9Rq5_x002B_xrERfTm_x002F_p8hJoOgX7fzR7ppxk3Wh4RkKZiGUCTlnY7SklWy8ANsmE508XrUiCksPishNjWHRw_x002B_S8CWYCMuCe1x699v7a2qJfSMzKgPzD1a9yrzE_x002F_mLWLgb9h_x002F_xGCHb5P2DQS1UhZARzizhY2C6hJOkl_x002B_Bg3zDMWRTZC23wNqZkYlneh3UrsIPY_x002F_R8DE1_x002F_PJsokx1Mh08ejpiCqBWuJMNvetAjtahHmrR8eWUuJih04y6P25UtW_x002B_47fV7dqH0ehg5K96tFBt5CBNdAPvmyBjtbB8SOcfszjgjLGu1NAhBcrcVix0BZH6K8oliOctOfJJtxXF35kgsu5W9ELeZY8EDhaitjXlpnWkwD9WeklMgrpy9zVSbDfzAOfpESygJtehlMhXnKPF_x002F_7mMaZmcia5CYYi2MzU03Vn6ZQH0plQ3iBSbKQpfH_x002F_gXF8g_x002F_Mf2R_x002F_b0czR2CfKmbMk8IIRxamYhbglI7NA_x002B_VdUx7o0Hxo0t9sUCS1C7BOiNkrbE_x002B_p5ZJWN20vN_x002F_fnc4OCFcabKWk3svyCtLiqrvf_x002F_2NJJUMrxlaszA6YMQU5kP7Wtqppyd32Sg7vegmunOYVMRV0DHoUDeroxwlUGK38SnHlJIaYXNrLqOauCZvpQcrkNsoLgSqlgCPVtH8TtAgKT7X6uHzN_x002B_Z7UDwvxfZvS9muRjwDPRUfpFtPVkRpt9q4JkMzTpwRQNwH8TBfFDzXo88CeZ4qME_x002F__x002B_cFymagx7yxaLmh2Yk1UiwJznys4UfJfMGahm09tycxf9u_x002F_Y5Ep73LCNcLTt8GtrGv7giM_x002F_ihIMG_x002F_BClbfqac_x002F_IYHZYa3aimgZfv7v_x002F_qA51mzJu2M23EX7E0fMZpaeLfdDtKUsL6R4OJkn63ZI20UWJWh5fwAWYxVMG34kgRkctXLrUDpWbS8cYRL0tu2PmHE9_x002B_a39i6AVEshzA9EZqfOMoSJ4ARBYhg1i4SCcomYU_x002F_xgOFzl0ACpZDiUM_x002F_lJzNOfnsfoklH69TVdNDTbu7SFmrYI398Uew_x002F_MHX4gMXhQ_x002F_phOqln5M1Q2PIB5PouSIiA1kER8Qv96qE9nwMGK5B8PTqxh5_x002B_Sbsqmo173uxnTz1ILXq8a4wrBMPmj3IB2yGVQ3p3UOtuwk_x002F_2GoBjA7GEVzO5KLXyKGGe6jU_x002F_cJFLRZOOyxprQRf6SYcxNh7K4Z71RiRIQIK9TU6WbJ756WQV5pzOoGwSodGBC0OUoIByfXBXYhaAJLN_x002B_k2ZiFoU1Y_x002B_Ne2ifTgKuBscQA_x002B_3G6MIELe5Xic86p8Yti2z1dNBmWsZjZD_x002F_jz_x002F_68fJoj7NpWKGtMe8u_x002F_rdGAQVBtxYFEeDaAhp32CtF3mUbAR5GNQ95f_x002F_WcyDxkx72juPeC6l_x002B_ORqxvpkwEgJYRxUhKvxw_x002F_CLahuSx_x002F_NAfKtpQt1vtBluf_x002F_2yMbkg397HCViCNPCJHlxfmkc8KOBKIKS9gs_x002F_7AypEOxwf7Y7e2v7xAT_x002B_PiW2DCbnLrMPCt2X6SwMujGQ306mzJJQMni3AP4JIk2JIALoIFF4m4rXb2cSa3ZZVAFdPn6ohLqLjpLTVek_x002B_Kbbka8sG4aUJVvD6h9_x002B_5_x002B_CMFpxsmq0LhAbKhWWXXXj7xvNwtB_x002F_pPrlHi2TRLFr0jeYyUR4nsq8G0SpHSI_x002B_tUKxUda3aH9uV3I_x002B_fwBdmui5bfUnrqy5Gu4bupaPz6uXK51edv8INaOrA6Nbu6Ii1R9uxAlCJML1JOX1KBLPjpRHB2ADFsQ84wELzi1MmuziRyNCkkxCyK4u_x002B_XpL4mey_x002B_OAntQi0py44ilJVj7v8WUAqc2EvVCiNfb5UB34OLx7ze1Jd9ftC7DEdZ_x002F_K37pS_x002F_G8xH60AHJ1kcbEp6miXPr5xERckPBJy4mqcGDuwVWcYxhOzjyFOW6wluwmWKPoAhlTZ73oblxUzkksw0bDa9oeWQ7d5zl0ZBSQ8p7Z_x002B_9APJRVQs7jOe_x002F_gkWupQ1wPwjxdZTfTxfbX3XH_x002B_8LG45vwdW_x002F_c_x002F_u_x002B_ClT_x002F_QyYRQaYz1dqRVpgNI7dbNWlE4c0wSZrNMzjKqL4tRdn07O_x002B_AAdWnQba80Q_x002B_jJivZ46XBo1FA3DX_x002B_R83VYJ89TdlStcyAlVcS7KghsibvkYZPDR6hy1pMFhhfDQtlfsgLPVuzuL_x002B_4vnyB_x002B_hWrbWGjjgRAnHMkKoyt96k8UeCwEJXxi_x002F_LarA06jLBXzpE4BUaZQtJmIDTm5aEfPggj1Y5fPdJ2ZTH8MMZshHfXAsbPVuHHpn5GsXj1MoA7VLccWkqKNulWTtypFQu2NvKIk2mMWMAEnAJ1_x002B_ul_x002F_0i_x002B_aDq9ZZIIabWhuQWvoFomgc6q_x002B_sfSnuuQ3bKLdUQgJE4hUuV2Ns2ziCCuKV6NR_x002B_3GqpBOfZopMZSl9JaNzDloq6NiyILokinceqgGYBqCWsXhL2NTzkCJ9DAzBrOSJR2X5lIGFWgX8YDWhuMyERmQGlNtQd2GFCjrBe5pxUW1x1h2dDy1aADWb2QFQXNc3k78B8Kp86EY5s1D_x002F_kikC_x002B_XpEqXZ7t6vhd7swstv6mSbczIHJD8xyiKCE2dUcUIEZCGMrswPbFjULEj4G9Pdv6_x002F_qSJ3TDjDad_x002B_lhDRIU5XijA5lC3eVyX7f91VVppeqpo70hmOg_x002F_9ZaCY66SOvYkMUXS9PrI_x002F_fnUpr4PPV_x002B_nxmZHul7W1udU9LXPzW_x002F_qDFisUYriBOhjGrK0SwSrBnaqRS_x002B_sQVcLCSejnTgKTa3VrGe46PV9bh9sV08UZzT5pyfx22TBs1QsZKj6gEySGrAAdSNu_x002F_8njejTmaoKpP9hwCHL23xHWb3PwScnhPYu1KwDcWYrwcbo0GW_x002B_PwWM7jhexaFbgOs37Ox6qonz2pFzZuEvMrr4BZKUS5e1h_x002F_IMXUrF0X6tNwVIY_x002F_pPEWplJbCNskqi7JdLpwLpHpucmNw6ROwk_x002F_u96vFsOQ51FUwF5tZ_x002F_kt9gozvTyH5puJzPwxGlyytx1Zubn31g5eN18zqVnoRQIcIVts05YG0394DZWjXLvCQAGkQiq2hj_x002B_X_x002F_pNF_x002F_l1RrYkChBGCGWYB0ouYs3dHzov7p_x002F_ILTm9gjBI1HcZUvzbVulAeRwe8nWHsVaw8AIlwDgrsmGK6fEQTWA6mSFgT8oG_x002F_rNhzy_x002B_IeZwZ_x002F_dtZ_x002F_2mG9QXYIkK5_x002B_xk_x002F_h8YMolETukDnqWV_x002F_ItceVDHK78Roao89w2QG3dGey6YTPQiPAm_x002B_c8xknJg_x002F_yTyIaDO3K_x002F_WwKObyKE6y5zurqvEPbtiBYbJbTklEEDIzmvKnzjV83LlqUl4TuhC8PPZalhofrSiB_x002B_9_x002B_LUP_x002B_YeqmLSlAWr1jHRBTCcvC8X_x002B_X2GQ90UNq1kkpUzELCJGv5t80FjKpreDM_x002B_1O5_x002B_34LKFXaf_x002F_G968VtLYOGalf2JWRuasOetQlpcBJLr7L7HoKfWDxHyxWmW5f_x002F_Uqq_x002F_veE7fFO03DLNECSxw3mK8wUGNSxaS0gTv2jBF4tRVoJeC_x002F_LJz2uEmSorNcY3wWnyUFuRdXUxyMQJGEMGLB_x002F_SpWjYVx6ih7VMcERAgVSbd5Mp9UD6jgfaIfi8tPno87gUzkwlJWhcu8tw95IGvUONCJGOxE_x002B_4egfxJbGIoPG_x002F_FZlQP_x002B_Ltv9XMlQ_x002B_oEp2aVSjnYaJY1iA8rJapyjiN1f80DXvd5TjpUQiYeZedS6EAF_x002F_Et9RcGagPfuukOXbni7EKf7lO1iK_x002F_ynvYLh7VuHL_x002F_Jw1pe283u681AbW052592L8AUZ8_x002B_zco4RB1bPcdIJcfdlnAxR0A5SfyqaR455hO9QPgnqPbdatmHujESLKgzSYcpx_x002B_eydfnOEXe98DgByxAji1E5dAOcImVO471k6bDkFLV476EJsQyNTAnUo9X6j6i8zdFGQREI7ATgKtznDOePfRWolpzRSXmSyWcjzXq75kPfCyE6cCFO2UFIeF5_x002B_hFFSNiLDAWArEGbugEXlJ37bMpom54R1tYMDeXwMnpdy3rmNTxQfuBXieK2EI2kwbvjr8UcOT_x002B_g6uBfmXieFVBzREbRn2pfL1gJU89SJK7FB2gESqnXdi9xetD3MzOlZBQ7KUg6PIp_x002B_cl9T37sPTrdcuEEAfAQA1dXB9jUvgv6jME9tvIWJSmMn31pS0qPZKV3gmLq39JdUwU4EPTSZy4Yf_x002B_3AGgZ5vt_x002F_Wne03R2CjGhYA4a_x002F_9Bv2cqKQPqYiYltzuJNnPUbBa_x002B_MdmSogUU7N748s9NLgCOEHoSHU_x002F_hRg12RHRf0xG_x002B_p_x002B_PCqpM5W3aRQmtcFH2XuKgTaQXSv99OJG_x002F_s_x002F_Wo8qqLrLK5P9IVRGGlrffJd9yTJcmg2mhq_x002B_Ul1Zr5n6c2qRekzxJLVGol3MAeUi7FLcmht8Fo7fAtPk3p5KHdQQrRqA1XcGmd7sDcfUjPEjhFitdGv6PFbbG5rjZfU9_x002F_c_x002F_e0g5X3f6BiI1v7boIUj_x002F_B8Se8mtwn0AFxm89UqbTzdmqBIGMOdVIU3dsUPtXHj0rtkLijykOrDp5xlR3eFRtDDNhw1GYcRXZy3yWNW2xkjeEAv9x5Zhw_x002B_F1cAf5Bb2RNkL9n_x002F_3liVu6QDsHqlNTZzrX_x002B_pWZ4K_x002B_728J2mK7o_x002B_RlTtjJDw6ZGizui37syUzWudxYLae7V_x002B_jUN3FA1NBuGpyLey5zfiQWr7rQUIyvU8LKepg4QAlrd7uArXioenfoBmpvNt5pWXTfiA_x002B_zdLhaQi5GcP3UECKT9xGpLKkUTzleOndmVE32n9h9k8XWPCrYwZJ_x002B_pgy4IwPQZ1FGaeY0KrGADCPwsgdYSikSyFsuYqwmovPgwx5vy_x002F_3TOMBm5yGbAni_x002F_6tnBKMIOYl5P9VefhFliPG2gx_x002F_9x_x002B__x002F_cE4G3tnqwLh6uMz5ITONoLT91d68AZks54I3V4Ow8zJ9RyKigNWacj170VPiGn_x002F_X2su5kZAqj3cyZ5YMbRZ2WfUmwP8ZErElBLbZ0_x002F_Lq4x8NzgNd2YGInWOpcpVGIGIarb3Rwgj4E3lMFVRupFeZVWE4O0j7vLC2rfLgOw_x002F_zLkpol7gwv1RTQV06p4WUqA37r9BYI4VEeGbNesQvlVhePgr3FZo_x002F_nte23LCeMJ0Wr3_x002F_yWkOMQGAzJyGj2aaoFNIaRyPvqvgO5Kh1XphZYmyAnBZ4POEFx9nuyBWI6FeKiMYXzPJ2HBqF584IDau77u9DLrnyjXSe9XMgMLR41sEIPNJo7b4VgD_x002B_8uX36uAfmlBDdZSMRFsidNwWkOGePTK4ej8gHABr6JAeohUbxe5gtOp7cWJNc4YkpO_x002B_hPbxfWc0dNZL5sj5qGnLKquF3e846zf5qT4etSoHEP1Pu015ymdbb3lo6B02dVPsD_x002B_ejbZWTqU_x002B_0ZQL9wkL_x002F_sZi_x002B_RMRcdjSniNyyzn28N4H9s1CGazIyBK8wJ4itiJsReZjFfLuo8a5kwMHsXmvPO4_x002F_fByeTGh7nEZRI7HNiZ4T7ojm0V11fDxWR7aq6V22NHdyq8F_x002B_qgifqYDWKY3_x002F_gdhxQee2YJXPnm_x002F__x002F_xviYj8xZhRRbJX1ZRCEqwO9es5DFpfTWyuAX4ueu6G0NSoRVz6SS5ZdtJjZcRNLNY7U9k6CcOhYW2paWlKo82C1fMzZSr0e3HtND1TeULFdY9r14mNWpDzGqqaZQ4rbQudAoGXssTrBGa_x002F_RkfZp4W6MWJe1gQbSH2bKhfF_x002B_l_x002F_wY_x002F_cXTM8x8b9Cp_x002B_VC00SKlR4NiRFik7qe854G4A7ss9Ykjzbzoij5fNppGfbKYiKwLsyW5ByCaG6PYnB8_x002F_dCYcP90DN9uRCvXgfIa8qP2sohLuYSxAroJ_x002F_RaWCX9dRb6hZht6pBuBh2okeCws_x002F_vmafa_x002B_ZEi63RgANtyIb9zftTbgolHyCU_x002B_37PSE_x002B_uEMxP6dv_x002B_9fmFg2w3bvsbe5NP4JzHOlx5kSb_x002B_fwMNRD_x002B_KcsplEgXlKXd7noIS7L42K6u6jxBRazZCwNTBSrEeyfE_x002B_XPOCNqcncGazkPFjEysN1Gd5MiYNH3xLWUTBVuzAKJVHxN0sUI5uEhRk_x002B_GDHZgwCB1d9OIDcunZ_x002F_n_x002B_AUgoeilGWwQZMGddpEGWp6aeKxnk59ci8xOWH8sHlTM1pYQ5SKrzeLiBPkYnm0Qn4Mesid_x002F_UytRHrL7rAbzCadeQHU4jB4Ln4KezrQS0xCfUiSu3nZoSEoqUydBylXiLN3hfojG5cjB0EywsyHNhBGniYwiHZsz9Yx4YJacnHV7TpMl4CG7IRbRjkFL74TUVfp6jhVdAfXv9oxGikQ0FkHTX3wnzLWZaL_x002B__x002F_VNDcQtakDH7K8XRLL5Kuo6mX6Hsaw_x002B_n_x002B_z_x002B_qwtqPfDy3jPxo_x002F_ZUjbCCjzUyUsULmBswUq_x002B_BM5uiHRtpUfph6ROJ0pIdhMDesonyEeutIq1cuAan4icJrH73Vmk2duKZbIeU2Vu8G_x002B_Zbe6ml1RblF4_x002B_samU7QpesfW7rcye867TODtnpdSdOVgMeFzyapMH_x002B_HJZV7VXdV1LdMTkV_x002F_r2VOKaVTGBTH3_x002B_WiswTtyHqRwRMAcoLaNrSmRN1nmUaI9vQALjRVPc2YVxUIyAGCHuotmUwwodigr9WxCyt_x002F_t9dvOFbIjKicHATfO7lErLXkt3z2RGpE2fNKAqI2rSAGsAd6krDryR2PgK4TOoaT73BHIbbe_x002B_DudlFMT0lDBUfQ1NNP65EZGOaTwoc6PEvBUX6EezhYVlYMs2_x002B_0GE28phOH0Vcg0B79rIRdkLPe_x002F_aQf16B9rbLUAmF1BZT0u0nxnnmY9kymVY3DlbofVMs_x002B_zR7Pv1Y1Irg8cPIecaKHh8L9rrw5xvBd1rdViF2oRrZSgOqViEYZGW8E2i_x002B_R_x002B_VX8e_x002F_Xx9UZLG0bM0E_x002B_rHQgTxSUimUY33pvO9ZbkVPus8J8oISUb_x002F_xmg1lZrCaruVQn8tYSLd_x002B_jlBK5FFUKPAUsYPfpGqgVzXilDG7t9H6GCevbNGigL2L5JG2KFMkJzLf_x002B_Q9_x002B_r0OeltBKMEkQZ9QCz5Vd_x002B_p9TRasPY_x002F_F4m10xmpUK7QfLAskNs8gSKEDK9AWm2_x002F_x4w8hyxDFJvafN6tB_x002B_NENjJBp4ifU62WGJIz8S7b_x002F_IE7SRwKXZdkPOM_x002B_I_x002F_TiYTV8zO3Z_x002B_nHajfTrlqo3UzIXpW5b2R7xOhj0kYQYpurk9EgOqly4HTm3OKEFCQJE08GRI42Ff0I_x002B_n09OPtqojGOUIr0W9HHCqUmd21z2D7TC2tst1kVD6TyUSQgAz_x002F_r3SBvmUQl_x002B__x002B_UFzh3gV_x002F_1zj5LNzmuexJcezlyrLdcYUz_x002B_2nRhVoijcx5A9u8SM5298NABSwI_x002F_E9ZXG46v2iob6NipnBTeynlwfa931lN822OrlzEFdMGEa8uTHZKboKC83_x002F_vKmPlZJd5_x002F_2_x002B_k_x002F_he_x002F_bKyfL50MPEEYSjs30jBVFob3zWkGDMagioO2inu9mdEwwCMAq3jrX3xKvIaUqFwuhTRA4y9oOXCceJALHRqGztrj3b12_x002F_g2USCXrioojo0z3gUH7cQCwm3iPEjd3c1t6WMLzZW1bN29rMTCuXK0iyi3g4FU2BjKURh_x002F_9z19HbHbSgO4TOvuHlW0tjP_x002B_eaeD1oKSYg7fmmgAdEnc7Ei8quqONc2MKZv7WwloH6Q6zTSOE7n8MLXalbFz_x002F_9XZFEfIc6zZ0CeUDtdd6biOqaHln8ZDTLpMWEP30oqBkEgl6SpkqI4ORa7d9FqlphCk_x002F_5eYRQgM027WtH9dVvB4b2iT_x002B_g4_x002B_0rEILCNdgaaaeNzhuiCWs94lfMoD7us1juH7ad7NtBoXF04tYpOvSl7BLZQNvoJoTXUFLrmPBV9FZBkQTGE7_x002B_evbGgIZM5EpVJvU_x002B_hfUu43VCFrIt_x002F_nz5KLmi_x002F_A67pxAX1ee_x002F_9QP5WHBXKYqSr2AYxko35ICDuJTaesk_x002F_hLUY5p1uv9bs_x002B_WmV_x002F_ti3N_x002B_BbY_x002F_Y99pyOCAuKlgIAugPo0skYsrkIhtXQguXx_x002B__x002B_CQ8IvEbgCqYwd7caulmcOxPrOg8_x002F_ETZCFyW4w0e_x002B_ovv_x002B_FBXug4EBDWKk1ZWHX2rx5vZGOXhoY9hxDrVAmq8kEi7kNoBoNMHpFSpGQUhDT3AShP9oL3m19wDvfNW_x002B_Q8I6VIGiIkGv0YfXr44waNG7ke4WJbGKWPCJcKRxMLat4XyhtwVDcO8pne_x002B_Vxzd9D0mhfE0DorCUHbDix3UKgL_x002B_HpGKGKt2pXMt0ZPoL2b8boOJBmnYUP1zj9PDCXErLS8NuM34wxivjESfY7wVnHt6DwouCKOuPrTkiO_x002F_F9LywqPsTUKRz5dd4n_x002B_Ty8scZxMHyyTA0wqRc7_x002F_se9FX_x002B_OvEfjr5pbfaEyuRVGzk0s57J_x002F_ZyI0ZheKEQBnIUarcPj6HoDPHUn9AGHIKKeK_x002B_yvFABbl9hh02Yh9ELidVP11H334VqqiO_x002F_Jmp5AFw_x002F_X7I9W_x002F_pCdDCJGzH24fiQXLCiSmmL_x002F_3IqHs7Hw3UKThI7paDa_x002F_OpplDUAjPOnHyYWS2yPeWLU4HF4JjYhHu6uFujNr089YT75VsOTKGhqTPZugEL4ngkctYPAL_x002F_jZvVhvRJK4fQDredO4I20zwigV0p00uFP7hc_x002B_1_x002F_4aUSLCkQM34WxO6Li0b80_x002B_NklsR2v3jc1qpsRogrwH8JdCQsK4bXLteDwi9vNMCnJ7SAgB7YCUUNa9KucjL1P8zYiJLYeOroA7n8uEDNM1lkWvFD_x002B_pTtY1Ywf_x002F_SZPKjhq9H_x002F_kVGObquJrtU_x002F_yVDYgLUdS2_x002B_vzXWuTcXINkj3CEiiFfVFMeQFDHIwA6WfQDddUMYUpPOSXpa93S224_x002B_oz50h05hKM6Gd4UxZjBNwKaE0ZkqleW0mYuF_x002F_rybDyMgfKsCqbLI3ezI9Rn6JlD84Vh3ZWhf_x002F_4XAzSa8Qo_x003D_</value>
      </Resources>
      <Variables isList="true" count="0" />
    </Dictionary>
    <EngineVersion>EngineV2</EngineVersion>
    <GlobalizationStrings isList="true" count="0" />
    <Key>b6f3699fe87b42cba3210899ac7bf0a5</Key>
    <MetaTags isList="true" count="0" />
    <Pages isList="true" count="1">
      <DashboardChristmas Ref="6" type="Stimulsoft.Dashboard.Components.StiDashboard" isKey="true">
        <Alias>Christmas</Alias>
        <BackColor>Transparent</BackColor>
        <Components isList="true" count="8">
          <Chart1 Ref="7" type="Stimulsoft.Dashboard.Components.Chart.StiChartElement" isKey="true">
            <ArgumentFormat Ref="8" type="NumberFormat" isKey="true">
              <DecimalDigits>0</DecimalDigits>
              <GroupSeparator>,</GroupSeparator>
              <NegativePattern>1</NegativePattern>
              <State>DecimalDigits</State>
              <UseGroupSeparator>False</UseGroupSeparator>
            </ArgumentFormat>
            <Arguments isList="true" count="1">
              <Item7 Ref="9" type="Stimulsoft.Dashboard.Components.Chart.StiArgumentChartMeter" isKey="true">
                <Expression>Charts.Year</Expression>
                <Key>1b617444626045c69048e7c67d105f17</Key>
              </Item7>
            </Arguments>
            <BackColor>Transparent</BackColor>
            <ClientRectangle>540,320,660,280</ClientRectangle>
            <CloseValues isList="true" count="0" />
            <DataFilters isList="true" count="0" />
            <EndValues isList="true" count="0" />
            <Guid>3285dd215cde4e368ee51fe4ae38fcbc</Guid>
            <HighValues isList="true" count="0" />
            <Legend Ref="10" type="Stimulsoft.Dashboard.Components.Chart.StiChartLegend" isKey="true">
              <Labels Ref="11" type="Stimulsoft.Dashboard.Components.Chart.StiChartLegendLabels" isKey="true">
                <Color>Transparent</Color>
                <Font>Arial,8</Font>
              </Labels>
              <Title Ref="12" type="Stimulsoft.Dashboard.Components.Chart.StiChartLegendTitle" isKey="true">
                <Color>Transparent</Color>
                <Font>Arial,12,Bold</Font>
              </Title>
            </Legend>
            <LowValues isList="true" count="0" />
            <Margin>3,3,3,3</Margin>
            <Name>Chart1</Name>
            <Padding>5,5,5,5</Padding>
            <Page isRef="6" />
            <Parent isRef="6" />
            <Title Ref="13" type="Stimulsoft.Dashboard.Components.StiTitle" isKey="true">
              <BackColor>Transparent</BackColor>
              <Font>Segoe UI,15.75</Font>
              <ForeColor>Transparent</ForeColor>
              <HorAlignment>Center</HorAlignment>
              <Text>People Meet Christmas</Text>
            </Title>
            <TransformActions isList="true" count="0" />
            <TransformFilters isList="true" count="0" />
            <TransformSorts isList="true" count="0" />
            <ValueFormat Ref="14" type="NumberFormat" isKey="true">
              <DecimalDigits>0</DecimalDigits>
              <GroupSeparator>,</GroupSeparator>
              <NegativePattern>1</NegativePattern>
              <State>DecimalDigits</State>
            </ValueFormat>
            <Values isList="true" count="3">
              <Item8 Ref="15" type="Stimulsoft.Dashboard.Components.Chart.StiValueChartMeter" isKey="true">
                <Expression>Sum(Charts.Family)</Expression>
                <Key>e6c52122bc5e4cb2b4ceabd242da92aa</Key>
              </Item8>
              <Item9 Ref="16" type="Stimulsoft.Dashboard.Components.Chart.StiValueChartMeter" isKey="true">
                <Expression>Sum(Charts.Alone)</Expression>
                <Key>92500b78e41546499190086b75da40e2</Key>
              </Item9>
              <Item10 Ref="17" type="Stimulsoft.Dashboard.Components.Chart.StiValueChartMeter" isKey="true">
                <Expression>Sum([Charts.At Work])</Expression>
                <Key>2977c8e41bf542969b0cb5b56f1e256b</Key>
              </Item10>
            </Values>
            <Weights isList="true" count="0" />
            <XAxis Ref="18" type="Stimulsoft.Dashboard.Components.Chart.StiXChartAxis" isKey="true">
              <Labels Ref="19" type="Stimulsoft.Dashboard.Components.Chart.StiChartAxisLabels" isKey="true">
                <Color>Transparent</Color>
                <Font>Arial,8</Font>
              </Labels>
              <Title Ref="20" type="Stimulsoft.Dashboard.Components.Chart.StiXChartAxisTitle" isKey="true">
                <Color>Transparent</Color>
                <Font>Arial,12,Bold</Font>
              </Title>
            </XAxis>
            <YAxis Ref="21" type="Stimulsoft.Dashboard.Components.Chart.StiYChartAxis" isKey="true">
              <Labels Ref="22" type="Stimulsoft.Dashboard.Components.Chart.StiChartAxisLabels" isKey="true">
                <Color>Transparent</Color>
                <Font>Arial,8</Font>
              </Labels>
              <Title Ref="23" type="Stimulsoft.Dashboard.Components.Chart.StiYChartAxisTitle" isKey="true">
                <Color>Transparent</Color>
                <Font>Arial,12,Bold</Font>
              </Title>
            </YAxis>
          </Chart1>
          <Chart2 Ref="24" type="Stimulsoft.Dashboard.Components.Chart.StiChartElement" isKey="true">
            <ArgumentFormat Ref="25" type="NumberFormat" isKey="true">
              <DecimalDigits>0</DecimalDigits>
              <GroupSeparator>,</GroupSeparator>
              <NegativePattern>1</NegativePattern>
              <State>DecimalDigits</State>
              <UseGroupSeparator>False</UseGroupSeparator>
            </ArgumentFormat>
            <Arguments isList="true" count="1">
              <Item12 Ref="26" type="Stimulsoft.Dashboard.Components.Chart.StiArgumentChartMeter" isKey="true">
                <Expression>Charts.Year</Expression>
                <Key>e2b0ae51adbf4b5092e427a3adc31d28</Key>
              </Item12>
            </Arguments>
            <BackColor>Transparent</BackColor>
            <ClientRectangle>540,40,660,280</ClientRectangle>
            <CloseValues isList="true" count="0" />
            <DataFilters isList="true" count="0" />
            <EndValues isList="true" count="0" />
            <Guid>e1b83b4edb5c474fae3f36c3f7fa0516</Guid>
            <HighValues isList="true" count="0" />
            <Legend Ref="27" type="Stimulsoft.Dashboard.Components.Chart.StiChartLegend" isKey="true">
              <Labels Ref="28" type="Stimulsoft.Dashboard.Components.Chart.StiChartLegendLabels" isKey="true">
                <Color>Transparent</Color>
                <Font>Arial,8</Font>
              </Labels>
              <Title Ref="29" type="Stimulsoft.Dashboard.Components.Chart.StiChartLegendTitle" isKey="true">
                <Color>Transparent</Color>
                <Font>Arial,12,Bold</Font>
              </Title>
            </Legend>
            <LowValues isList="true" count="0" />
            <Margin>3,3,3,3</Margin>
            <Name>Chart2</Name>
            <Padding>5,5,5,5</Padding>
            <Page isRef="6" />
            <Parent isRef="6" />
            <Title Ref="30" type="Stimulsoft.Dashboard.Components.StiTitle" isKey="true">
              <BackColor>Transparent</BackColor>
              <Font>Segoe UI,15.75</Font>
              <ForeColor>Transparent</ForeColor>
              <HorAlignment>Center</HorAlignment>
              <Text>Where People Buy Gifts</Text>
            </Title>
            <TransformActions isList="true" count="0" />
            <TransformFilters isList="true" count="0" />
            <TransformSorts isList="true" count="0" />
            <ValueFormat Ref="31" type="NumberFormat" isKey="true">
              <DecimalDigits>0</DecimalDigits>
              <GroupSeparator>,</GroupSeparator>
              <NegativePattern>1</NegativePattern>
              <State>DecimalDigits</State>
            </ValueFormat>
            <Values isList="true" count="3">
              <Item13 Ref="32" type="Stimulsoft.Dashboard.Components.Chart.StiValueChartMeter" isKey="true">
                <Expression>Sum(Charts.Beforehand)</Expression>
                <Key>3a55ac81b2ec4ac4b4aa523d4db0a31e</Key>
                <Label>Beforehand</Label>
              </Item13>
              <Item14 Ref="33" type="Stimulsoft.Dashboard.Components.Chart.StiValueChartMeter" isKey="true">
                <Expression>Sum([Charts.Xmas eve])</Expression>
                <Key>2679aa6e425b497ab41382fd1a83390d</Key>
              </Item14>
              <Item15 Ref="34" type="Stimulsoft.Dashboard.Components.Chart.StiValueChartMeter" isKey="true">
                <Expression>Sum([Charts.E-commerce])</Expression>
                <Key>941c47f5ac0e43478f059c50adf520b2</Key>
              </Item15>
            </Values>
            <Weights isList="true" count="0" />
            <XAxis Ref="35" type="Stimulsoft.Dashboard.Components.Chart.StiXChartAxis" isKey="true">
              <Labels Ref="36" type="Stimulsoft.Dashboard.Components.Chart.StiChartAxisLabels" isKey="true">
                <Color>Transparent</Color>
                <Font>Arial,8</Font>
              </Labels>
              <Title Ref="37" type="Stimulsoft.Dashboard.Components.Chart.StiXChartAxisTitle" isKey="true">
                <Color>Transparent</Color>
                <Font>Arial,12,Bold</Font>
              </Title>
            </XAxis>
            <YAxis Ref="38" type="Stimulsoft.Dashboard.Components.Chart.StiYChartAxis" isKey="true">
              <Labels Ref="39" type="Stimulsoft.Dashboard.Components.Chart.StiChartAxisLabels" isKey="true">
                <Color>Transparent</Color>
                <Font>Arial,8</Font>
              </Labels>
              <Title Ref="40" type="Stimulsoft.Dashboard.Components.Chart.StiYChartAxisTitle" isKey="true">
                <Color>Transparent</Color>
                <Font>Arial,12,Bold</Font>
              </Title>
            </YAxis>
          </Chart2>
          <Progress1 Ref="41" type="Stimulsoft.Dashboard.Components.Progress.StiProgressElement" isKey="true">
            <BackColor>Transparent</BackColor>
            <ClientRectangle>0,240,260,160</ClientRectangle>
            <DataFilters isList="true" count="0" />
            <Font>Arial,13,Bold</Font>
            <ForeColor>Transparent</ForeColor>
            <Guid>21c7cc0961064a16a8c298315689519c</Guid>
            <Margin>3,3,3,3</Margin>
            <Mode>DataBars</Mode>
            <Name>Progress1</Name>
            <Padding>5,5,5,5</Padding>
            <Page isRef="6" />
            <Parent isRef="6" />
            <Series Ref="42" type="Stimulsoft.Dashboard.Components.Progress.StiSeriesProgressMeter" isKey="true">
              <Expression>List.Year</Expression>
              <Key>54b26db67ffb43b2b8850fbe6315b1be</Key>
            </Series>
            <Target Ref="43" type="Stimulsoft.Dashboard.Components.Progress.StiTargetProgressMeter" isKey="true">
              <Expression>Sum([List.Target Amount])</Expression>
              <Key>c58d97d17a98401189e13e09a77bad45</Key>
            </Target>
            <Title Ref="44" type="Stimulsoft.Dashboard.Components.StiTitle" isKey="true">
              <BackColor>Transparent</BackColor>
              <Font>Segoe UI,15.75,Regular,Point,False,204</Font>
              <ForeColor>Transparent</ForeColor>
              <HorAlignment>Center</HorAlignment>
              <Text>Expenses for Christmas</Text>
            </Title>
            <TransformActions isList="true" count="0" />
            <TransformFilters isList="true" count="0" />
            <TransformSorts isList="true" count="0" />
            <Value Ref="45" type="Stimulsoft.Dashboard.Components.Progress.StiValueProgressMeter" isKey="true">
              <Expression>Sum(List.Amount)</Expression>
              <Key>fe4ff557c36d4322bcc572136c1a69bf</Key>
            </Value>
          </Progress1>
          <TableList Ref="46" type="Stimulsoft.Dashboard.Components.Table.StiTableElement" isKey="true">
            <BackColor>Transparent</BackColor>
            <ClientRectangle>0,400,540,200</ClientRectangle>
            <Columns isList="true" count="4">
              <Item18 Ref="47" type="Stimulsoft.Dashboard.Components.Table.StiDimensionColumn" isKey="true">
                <Expression>List.Year</Expression>
                <ForeColor>Transparent</ForeColor>
                <HorAlignment>Right</HorAlignment>
                <Key>af9fc7a1b6464b85a20a2feec62f1a74</Key>
                <TextFormat Ref="48" type="NumberFormat" isKey="true">
                  <DecimalDigits>0</DecimalDigits>
                  <GroupSeparator>,</GroupSeparator>
                  <NegativePattern>1</NegativePattern>
                  <State>DecimalDigits</State>
                  <UseGroupSeparator>False</UseGroupSeparator>
                </TextFormat>
              </Item18>
              <Item19 Ref="49" type="Stimulsoft.Dashboard.Components.Table.StiDimensionColumn" isKey="true">
                <Expression>List.Name</Expression>
                <ForeColor>Transparent</ForeColor>
                <Key>8e442a227ac141828b400fd47dce1353</Key>
                <Label>Name</Label>
              </Item19>
              <Item20 Ref="50" type="Stimulsoft.Dashboard.Components.Table.StiMeasureColumn" isKey="true">
                <Expression>Sum(List.Amount)</Expression>
                <ForeColor>Transparent</ForeColor>
                <HorAlignment>Right</HorAlignment>
                <Key>b568029b27394cb49fc656633ed851f4</Key>
                <Label>Amount</Label>
                <TextFormat Ref="51" type="NumberFormat" isKey="true">
                  <DecimalDigits>0</DecimalDigits>
                  <GroupSeparator>,</GroupSeparator>
                  <NegativePattern>1</NegativePattern>
                  <State>DecimalDigits</State>
                </TextFormat>
              </Item20>
              <Item21 Ref="52" type="Stimulsoft.Dashboard.Components.Table.StiMeasureColumn" isKey="true">
                <Expression>Sum(List.TargetAmount)</Expression>
                <ForeColor>Transparent</ForeColor>
                <HorAlignment>Right</HorAlignment>
                <Key>1e85c1739c2e4c988e67331fdfc4ff92</Key>
                <Label>Target Amount</Label>
                <TextFormat Ref="53" type="NumberFormat" isKey="true">
                  <DecimalDigits>0</DecimalDigits>
                  <GroupSeparator>,</GroupSeparator>
                  <NegativePattern>1</NegativePattern>
                  <State>DecimalDigits</State>
                </TextFormat>
              </Item21>
            </Columns>
            <DataFilters isList="true" count="0" />
            <Font>Arial,10</Font>
            <ForeColor>Transparent</ForeColor>
            <Guid>50f06813fece4cbc8a917230751bf9d2</Guid>
            <HeaderFont>Arial,10</HeaderFont>
            <HeaderForeColor>Transparent</HeaderForeColor>
            <Margin>3,3,3,3</Margin>
            <Name>TableList</Name>
            <Padding>5,5,5,5</Padding>
            <Page isRef="6" />
            <Parent isRef="6" />
            <Title Ref="54" type="Stimulsoft.Dashboard.Components.StiTitle" isKey="true">
              <BackColor>Transparent</BackColor>
              <Font>Segoe UI,15.75</Font>
              <ForeColor>Transparent</ForeColor>
              <HorAlignment>Center</HorAlignment>
              <Text>Christmans Sales Statistics</Text>
            </Title>
            <TransformActions isList="true" count="0" />
            <TransformFilters isList="true" count="0" />
            <TransformSorts isList="true" count="0" />
            <UserFilters isList="true" count="0" />
            <UserSorts isList="true" count="2">
              <Item22 Ref="55" type="Stimulsoft.Data.Engine.StiDataSortRule" isKey="true">
                <Key>8ea910a744b34a61bf1e985ae1b13e67</Key>
              </Item22>
              <Item23 Ref="56" type="Stimulsoft.Data.Engine.StiDataSortRule" isKey="true">
                <Key>d1c4ba3d26a9413f9a582ffc9f1dd3ac</Key>
              </Item23>
            </UserSorts>
          </TableList>
          <Text1 Ref="57" type="Stimulsoft.Dashboard.Components.Text.StiTextElement" isKey="true">
            <BackColor>Transparent</BackColor>
            <ClientRectangle>0,0,1200,40</ClientRectangle>
            <ForeColor>Transparent</ForeColor>
            <Guid>bf6d52cce7f04ed2b434259ecd7bc2d6</Guid>
            <Margin>3,3,3,3</Margin>
            <Name>Text1</Name>
            <Padding>0,0,0,0</Padding>
            <Page isRef="6" />
            <Parent isRef="6" />
            <Text>&lt;font face="Segoe UI" size="36"&gt;&lt;text-align="Center"&gt;Christmas&lt;/text-align&gt;&lt;/font&gt;</Text>
            <Title Ref="58" type="Stimulsoft.Dashboard.Components.StiTitle" isKey="true">
              <BackColor>Transparent</BackColor>
              <Font>Arial,11</Font>
              <ForeColor>Transparent</ForeColor>
              <Text>Text</Text>
              <Visible>False</Visible>
            </Title>
          </Text1>
          <ListBox2 Ref="59" type="Stimulsoft.Dashboard.Components.ListBox.StiListBoxElement" isKey="true">
            <BackColor>Transparent</BackColor>
            <ClientRectangle>260,40,280,200</ClientRectangle>
            <DataFilters isList="true" count="0" />
            <Font>Segoe UI,9.75,Regular,Point,False,204</Font>
            <ForeColor>Transparent</ForeColor>
            <Guid>bc2bfa2019844ed8b6abd89d11186b71</Guid>
            <KeyMeter Ref="60" type="Stimulsoft.Dashboard.Components.ListBox.StiKeyListBoxMeter" isKey="true">
              <Expression>List.Name</Expression>
              <Key>10c28a1343834d0cb76d6bd43530c4f3</Key>
            </KeyMeter>
            <Margin>3,3,3,3</Margin>
            <Name>ListBox2</Name>
            <NameMeter Ref="61" type="Stimulsoft.Dashboard.Components.ListBox.StiNameListBoxMeter" isKey="true">
              <Expression>List.Name</Expression>
              <Key>327da38b8bbe4f9aa6062dc88a9772e4</Key>
            </NameMeter>
            <Padding>5,5,5,5</Padding>
            <Page isRef="6" />
            <Parent isRef="6" />
            <ParentKey>e8f2ad868c2244e2a0647f5b6e53298a</ParentKey>
            <SelectionMode>Multi</SelectionMode>
            <ShowAllValue>True</ShowAllValue>
            <Title Ref="62" type="Stimulsoft.Dashboard.Components.StiTitle" isKey="true">
              <BackColor>Transparent</BackColor>
              <Font>Segoe UI,15.75,Regular,Point,False,204</Font>
              <ForeColor>Transparent</ForeColor>
              <HorAlignment>Center</HorAlignment>
              <Text>Categories</Text>
            </Title>
            <TransformActions isList="true" count="0" />
            <TransformFilters isList="true" count="0" />
            <TransformSorts isList="true" count="0" />
          </ListBox2>
          <ListBox1 Ref="63" type="Stimulsoft.Dashboard.Components.ListBox.StiListBoxElement" isKey="true">
            <BackColor>Transparent</BackColor>
            <ClientRectangle>0,40,260,200</ClientRectangle>
            <DataFilters isList="true" count="0" />
            <Font>Segoe UI,9.75,Regular,Point,False,204</Font>
            <ForeColor>Transparent</ForeColor>
            <Guid>b4e430781118489484796104ddf1ef39</Guid>
            <KeyMeter Ref="64" type="Stimulsoft.Dashboard.Components.ListBox.StiKeyListBoxMeter" isKey="true">
              <Expression>List.Year</Expression>
              <Key>4f9a0dc0438748b69423ba3e848613a1</Key>
              <Label>Year</Label>
            </KeyMeter>
            <Margin>3,3,3,3</Margin>
            <Name>ListBox1</Name>
            <NameMeter Ref="65" type="Stimulsoft.Dashboard.Components.ListBox.StiNameListBoxMeter" isKey="true">
              <Expression>List.Year</Expression>
              <Key>bd39508bce294797a5afc895dc91e2bb</Key>
              <Label>Year</Label>
            </NameMeter>
            <Padding>5,5,5,5</Padding>
            <Page isRef="6" />
            <Parent isRef="6" />
            <ParentKey>e8f2ad868c2244e2a0647f5b6e53298a</ParentKey>
            <SelectionMode>Multi</SelectionMode>
            <Title Ref="66" type="Stimulsoft.Dashboard.Components.StiTitle" isKey="true">
              <BackColor>Transparent</BackColor>
              <Font>Segoe UI,15.75,Regular,Point,False,204</Font>
              <ForeColor>Transparent</ForeColor>
              <HorAlignment>Center</HorAlignment>
              <Text>Year</Text>
            </Title>
            <TransformActions isList="true" count="0" />
            <TransformFilters isList="true" count="0" />
            <TransformSorts isList="true" count="0" />
          </ListBox1>
          <Gauge1 Ref="67" type="Stimulsoft.Dashboard.Components.Gauge.StiGaugeElement" isKey="true">
            <BackColor>Transparent</BackColor>
            <ClientRectangle>260,240,280,160</ClientRectangle>
            <DataFilters isList="true" count="0" />
            <Font>Arial,13</Font>
            <ForeColor>Transparent</ForeColor>
            <Guid>97121ecd10564409b9c1ad80ba7fd012</Guid>
            <Margin>3,3,3,3</Margin>
            <Maximum>100</Maximum>
            <Minimum>0</Minimum>
            <Name>Gauge1</Name>
            <Padding>5,5,5,5</Padding>
            <Page isRef="6" />
            <Parent isRef="6" />
            <Ranges isList="true" count="3">
              <Item28 Ref="68" type="Stimulsoft.Dashboard.Components.Gauge.StiGaugeRange" isKey="true">
                <Color>Red</Color>
                <End>33</End>
              </Item28>
              <Item29 Ref="69" type="Stimulsoft.Dashboard.Components.Gauge.StiGaugeRange" isKey="true">
                <Color>Yellow</Color>
                <End>66</End>
                <Start>33</Start>
              </Item29>
              <Item30 Ref="70" type="Stimulsoft.Dashboard.Components.Gauge.StiGaugeRange" isKey="true">
                <Color>Green</Color>
                <Start>66</Start>
              </Item30>
            </Ranges>
            <RangeType>Color</RangeType>
            <Series Ref="71" type="Stimulsoft.Dashboard.Components.Gauge.StiSeriesGaugeMeter" isKey="true">
              <Expression>List.Year</Expression>
              <Key>b5931136f83447ccbb633135b3f1cce3</Key>
              <Label>Year</Label>
            </Series>
            <Title Ref="72" type="Stimulsoft.Dashboard.Components.StiTitle" isKey="true">
              <BackColor>Transparent</BackColor>
              <Font>Arial,11</Font>
              <ForeColor>Transparent</ForeColor>
              <Text>Gauge</Text>
              <Visible>False</Visible>
            </Title>
            <TransformActions isList="true" count="0" />
            <TransformFilters isList="true" count="0" />
            <TransformSorts isList="true" count="0" />
            <Type>Linear</Type>
            <Value Ref="73" type="Stimulsoft.Dashboard.Components.Gauge.StiValueGaugeMeter" isKey="true">
              <Expression>Sum(List.Amount)</Expression>
              <Key>c744921f243a4225895fd3705c656b56</Key>
              <Label>Amount</Label>
            </Value>
          </Gauge1>
        </Components>
        <Guid>29b38e7a3b9c469989da671e5dfbbb2e</Guid>
        <Name>DashboardChristmas</Name>
        <Report isRef="0" />
      </DashboardChristmas>
    </Pages>
    <PrinterSettings Ref="74" type="Stimulsoft.Report.Print.StiPrinterSettings" isKey="true" />
    <ReferencedAssemblies isList="true" count="8">
      <value>System.Dll</value>
      <value>System.Drawing.Dll</value>
      <value>System.Windows.Forms.Dll</value>
      <value>System.Data.Dll</value>
      <value>System.Xml.Dll</value>
      <value>Stimulsoft.Controls.Dll</value>
      <value>Stimulsoft.Base.Dll</value>
      <value>Stimulsoft.Report.Dll</value>
    </ReferencedAssemblies>
    <ReportAlias>Christmas</ReportAlias>
    <ReportAuthor>Stimulsoft</ReportAuthor>
    <ReportChanged>11/14/2018 2:28:29 PM</ReportChanged>
    <ReportCreated>9/1/2018 10:06:34 PM</ReportCreated>
    <ReportFile>C:\Program Files (x86)\Stimulsoft Ultimate 2018.3.5\Designers\.NET\Dashboards\Christmas.mrt</ReportFile>
    <ReportGuid>cc47015da4694eb78ad2ed4995667c9e</ReportGuid>
    <ReportName>Christmas</ReportName>
    <ReportUnit>Inches</ReportUnit>
    <ReportVersion>2018.3.5.0</ReportVersion>
    <Script>using System;
  using System.Drawing;
  using System.Windows.Forms;
  using System.Data;
  using Stimulsoft.Controls;
  using Stimulsoft.Base.Drawing;
  using Stimulsoft.Report;
  using Stimulsoft.Report.Dialogs;
  using Stimulsoft.Report.Components;

  namespace Reports
  {
      public class Christmas : Stimulsoft.Report.StiReport
      {
          public Christmas()        {
              this.InitializeComponent();
          }

          #region StiReport Designer generated code - do not modify
      #endregion StiReport Designer generated code - do not modify
      }
  }
  </Script>
    <ScriptLanguage>CSharp</ScriptLanguage>
    <Styles isList="true" count="0" />
  </StiSerializer>`;
}
