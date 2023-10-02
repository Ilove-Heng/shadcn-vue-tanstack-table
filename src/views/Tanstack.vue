<script setup lang="ts">
import { h, ref } from "vue";
import people from "@/assets/json/mockDataPeople.json";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import EditButton from "@/components/common/EditButton.vue";

import {
  useVueTable,
  FlexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/vue-table";


const pagesize = [{ number: "5" }, { number: "10" }, { number: "20" }];

const selected = ref<string[]>([]);

// const props = defineProps({
//     data: {
//         type: Array as () => string[],
//         default: () => []
//     },
//     columns: {
//         type: Array as () => string[],
//         default: () => []
//     }
// })

const data = ref(people);

const columnsPeople = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    // accessorKey: "frist_name",
    accessorKey: "first_name",
    header: "First name",
  },
  {
    accessorKey: "last_name",
    header: "Last name",
  },
  {
    accessorFn: (row: Record<string,string>) => `${row.first_name} ${row.last_name}`,
    header: 'Name',
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "created_at",
    header: "Created",
    cell: (info:Record<string,any>) => format(new Date(info.getValue()),'MM/dd/yyyy'),
  },
  {
    accessorKey: "edit",
    header: " ",
    cell: () => {
      return h(EditButton)
    },
  },
];

const table = useVueTable({
  data: data.value,
  columns: columnsPeople,
  getCoreRowModel: getCoreRowModel(),
});
</script>

<template>
  <div class="m-10">
    <div class="flex gap-10">
      <div class="my-4 w-64">
        <Input placeholder="ស្វែងរក" />
      </div>
      <div class="my-4 w-64">
        <Select>
          <SelectTrigger class="w-[180px]">
            <SelectValue placeholder="Select a page size" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Pagesize</SelectLabel>
              <div v-for="(page, idx) in pagesize" :key="idx">
                <SelectItem :value="page.number" v-model="selected">
                  {{ page.number }}
                </SelectItem>
              </div>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>

    <Table>
      <TableCaption>A list of your recent users.</TableCaption>
      <TableHeader>
        <TableRow
          v-for="headerGroup in table.getHeaderGroups()"
          :key="headerGroup.id"
        >
          <TableHead
            v-for="header in headerGroup.headers"
            :key="header.id"
            scope="col"
          >
            <FlexRender
              :render="header.column.columnDef.header"
              :props="header.getContext()"
            />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="row in table.getRowModel().rows" :key="row.id">
          <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
            <FlexRender
              :render="cell.column.columnDef.cell"
              :props="cell.getContext()"
            />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>

<style scoped></style>
