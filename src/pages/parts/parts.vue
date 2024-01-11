<template>
  <!-- 这个部分，就写 HTML -->
  <Layout>
    <div class="container">
      <h1 style="color: black">Parts</h1>
      <el-card>
        <div>
          <h2>Basic parts</h2>
          In this year, we have constructed 10 basic parts, which contain 2
          degradation protein, a attachment protein, a Transcript factor and 5
          reversed fragments.The protein DepoPETase and FASTPETase was designed
          to decomposed the PET in the environment into the TPA. Then the TF,
          Xylsmut, would detect the TPA and report the result by GFP. The
          reversed fragments contains 2 promotors, a RBS, a terminator and a
          RFP. These would be constructed on the other side of the reverse
          promotor to work as a reporter system. You can click the part number
          for more detail in the following table. This is the list of our basic
          parts: Part Number Name length Type K4591000 FAST-PETase 879 bp coding
          K4591001 DepoPETase 873 bp coding K4591002 XylSmut 966 bp coding
          K4591003 MstX 360 bp coding K4591004 Reversed T500 30 bp terminator
          K4591005 Reversed RFP 706 bp RFP K4591006 Reversed RBS 12 bp coding
          K4591007 Reversed PHpall 373 bp promoter K4591008 Reversed PdegQ 192
          bp promoter K4591020 sfGFP 717 bp coding Composite parts Total of 4
          composite parts were established, including 5 of our modules: PET
          Degradation Modules(BBa_K4591012) Reporting Module(BBa_K4591009 &
          BBa_K4591010) Adhesion Module(BBa_K4591010) Flip Module(BBa_K4591009)
          Suicide Switch (BBa_K4591012) This is the list of our composite parts:
          Part Number Name length Type K4591009⭐
          T500-RFP-lox66-PHpaⅡ-lox71-XylSmut-tetO-sfGFP-T500 3430 bp composite
          K4591010 Pm-MstX-BslA-tetR-Pxyl-cre-T500 2924 bp composite K4591011
          T500-Para-lox66-PdegQ-lox71-MazF-T500 1029 bp composite K4591012
          P43-DepoPETase-MHETase-T500 2776 bp composite The Best Composite Part
          The best composite part is the
          T500-RFP-lox66-PHpaⅡ-lox71-XylSmut-tetO-sfGFP-T500 (BBa_K4591009),
          which is the main part of the flip module. The HpaII promotor with the
          reversed loxp site could be controled by the cre recombinase. When
          there is no cre be expressed, the HpaII promotor would keep its
          original direction. If the Pxyl be started by the xylose, the cre
          would be expressed and flip the fragment between the loxp sites.By
          this way, we could control which gene we would express like a
          switch.Farther more, this part may be used as a “gear box”, we could
          choose the “gear” of the engineered bacteria by the cre recombinase.
          That so wonderful and exciting that we decide choose this part as our
          “Best Composite Part”.
        </div>
      </el-card>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import Layout from "@/layout/Layout.vue";
</script>

<style scoped></style>
